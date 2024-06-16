import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return redirect("/checkout");
  }

  if (status === "complete") {
    // TODO check if failure is possible. If so, should probably have a different message
    return (
      <section id="success">
        <p>
          Thanks for shopping with us! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:coopsoc.unsw@gmail.com">coopsoc.unsw@gmail.com</a>.
        </p>
      </section>
    );
  }

  return null;
}
