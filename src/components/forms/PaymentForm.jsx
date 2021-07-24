import React, { useState, useEffect } from 'react';

const ProductDisplay = () => (
  <section>
    <div className="product">
      <div className="description">
        <h3>Purchase a tree</h3>
        <h5>$1.00</h5>
      </div>
    </div>
    <form action="http://localhost:3000/purchase" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
   </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function PaymentForm() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if(query.get('success')) {
      setMessage("Trees adopted! You will receive an email confirmation")
    }

    if(query.get("cancelled")) {
      setMessage("Order cancelled");
    }
  }, []);
  return message ? (
    <Message message={message} />
     ) : (
      <ProductDisplay />
     );
}
