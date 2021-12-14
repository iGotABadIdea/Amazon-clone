import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/cartSlice';
import { selectUser } from '../slices/userSlice';
import CheckoutProduct from './checkoutproduct';
import "./payment.css"
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from "./Components/axios"

function Payment() {
    const history=useHistory;
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const user = useSelector(selectUser);  
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret]  = useState(true);

    useEffect(()=> {
        const getClientSecret = async () => {
            const respond = await axios({
                method: 'post',
                url: `/payments/create?total= ${{total} * 100}`
            });
            setClientSecret(respond.data.clientSecret)
        }
    }, [items])
    const handleSubmit = async e =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent })=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false)
            history.replace('/orders')
        })
    }
    const handleChange = e =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }
    return (
        <div className="payment">
            <div className="paymentContainer">
                <h1>
                    Checkout (<Link to="/checkout">{items?.length} items</Link>)
                </h1>
                <div className="paymentSection">
                    <div className="paymentTitle">
                        <h3>Delivery Address: </h3>
                    </div>
                    <div className="paymentAddress">
                        <p>{user?.email}</p>
                        <p>XYZ appartment, 123 lane </p>
                        <p>Siliguri, West Bengal</p>
                    </div>
                </div>
                 <div className="paymentSection">
                     <div className="paymentTitle">
                         <h3>Review items and delievry </h3>
                     </div>
                     <div className="paymentItems"> 
                      {items.map((item, i) => (
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    )) }
                     </div>
                 </div>
                  <div className="paymentSection">
                      <div className="paymentTitle">
                          <h3>Payment Method </h3> 
                      </div>
                      <div className="paymentDetails">
                          <form onSubmit={handleSubmit}>
                              <CardElement onChange={handleChange}/>
                              <div className="paymentPriceContainer">
                                   <CurrencyFormat
                                    renderText={(value)=>(
                                     <>
                                     <h3>Subtotal ({items.length}) items : {value}</h3>
                                     </>
                                    )}
            decimalScale={2}
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$ "}
            />    
            <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p>:
                "Buy Now"}</span>
            </button>
                              </div>
                              {error && <div>{error}</div>}
                          </form>
                          </div>    
                  </div>

            </div>
            
        </div>
    )
}

export default Payment
