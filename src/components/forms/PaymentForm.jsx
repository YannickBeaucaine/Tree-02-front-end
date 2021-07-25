import React, { useState, useEffect } from 'react';
import './PaymentForm-style.css';
import {Button} from 'react-bootstrap';
import tree_img from '../images/to2-with-trees.png';

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
    <section className="mb-3">
      <div className="container mt-5 text-center product">
          <div className="row mb-0 adopt-section">
              <div className=" col-md-12 adoption-cart">
              
                <form action="http://localhost:3000/purchase" method="POST">
                <label for="quantity">
                  <h2 className ="header-adopt-title">How many trees would you like?</h2>
                  </label><br />
                <input className="mt-2 mb-2 number-count" type="number" id="quantity" name="quantity" min="1" max="100" />
                <br/>
                <p>$1 Each</p>
                <Button className="mt-2 mb-2" type="submit" variant="outline-dark" size="sm">Checkout</Button>
                {/* <input type="submit" value="Checkout"/> */}
                </form>
             </div>
           </div>
           <div className="row mt-0 adopt-section">
              <div className=" col-md-12 ">
                <img className="img-of-trees img-fluid" src= {tree_img} />
             </div>
           </div>
      </div>
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
                