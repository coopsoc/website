/* eslint-disable @typescript-eslint/no-var-requires */

// From https://docs.stripe.com/checkout/embedded/quickstart?client=next

import { NextApiRequest, NextApiResponse } from "next";
import { isMerchActive } from "scripts/merch";
import { z } from "zod";

const itemSchema = z.object({
  price: z.string(),
  quantity: z.number().int(),
});

const bodySchema = z.object({
  items: z.array(itemSchema),
});

type Body = z.infer<typeof bodySchema>;

type ResponseData = {
  error?: string;
  clientSecret?: string;
  status?: string;
  customer_email?: string;
};

// TODO update secret key in .env.local
// TODO (opt) - change from CJS/require to MJS/loadStripe - see checkout/index.tsx
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (!isMerchActive()) {
    return res.status(404).end("Not Found");
  }

  switch (req.method) {
    case "POST":
      try {
        const result = bodySchema.safeParse(JSON.parse(req.body));
        if (!result.success) {
          return res
            .status(400)
            .json({ error: "Invalid request body. Please try again." });
        }
        const validBody: Body = result.data;

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: "embedded",
          line_items: validBody.items,
          mode: "payment",
          return_url: `${req.headers.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({ clientSecret: session.client_secret });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    case "GET":
      try {
        const session = await stripe.checkout.sessions.retrieve(
          req.query.session_id,
        );

        res.send({
          status: session.status,
          customer_email: session.customer_details.email,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
      // TODO: Do we need this?
      // res.setHeader("Allow", req.method);
      res.status(405).end("Method Not Allowed");
  }
}
