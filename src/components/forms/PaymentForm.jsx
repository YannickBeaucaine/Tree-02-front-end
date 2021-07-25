import React, { useState, useEffect } from 'react';

export default function PaymentForm() {
  const [message, setMessage] = useState("");

  const [paymentForm, setPaymentForm] = useState({
    purchase:{
      quantity: ''
    }
  })
  
  const changeInput = e => {
    setPaymentForm({
      purchase:{
        [e.target.name] : e.target.value
      }
    })
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if(query.get('success')) {
      setMessage("Trees adopted! You will receive an email confirmation")
    }

    if(query.get("cancelled")) {
      setMessage("Order cancelled");
    }
  }, []);

  const quantity = paymentForm

  const ProductDisplay = () => (
    <section>
      <div className="product">
        <h1>Adopt a tree</h1>
      </div>
      <form action="http://localhost:3000/purchase" method="POST">
        <label for="quantity">How many trees would you like?</label><br />
        <input type="number" id="quantity" name="quantity" min="1" max="100" />
        <input type="submit" value="Checkout"/>
      </form>
     </section>
  );

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  return message ? (
    <Message message={message} />
     ) : (
      <ProductDisplay />
     );
}
