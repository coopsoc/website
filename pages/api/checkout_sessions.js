// From https://docs.stripe.com/checkout/embedded/quickstart?client=next

// TODO update secret key in .env.local
// TODO (opt) - change from CJS/require to MJS/loadStripe - see checkout/index.tsx
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: "embedded",
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              price: "price_1PQoBSKWz42bhxUEodZ18Z6I",
              quantity: 1,
              // TODO - get info from cart / price IDs
              //  (could get the price for the given product with stripe API)
            },
          ],
          mode: "payment",
          return_url: `${req.headers.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({ clientSecret: session.client_secret });
      } catch (err) {
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
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
      res.setHeader("Allow", req.method);
      res.status(405).end("Method Not Allowed");
  }
}
