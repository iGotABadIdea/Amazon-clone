import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/cartSlice';
import { selectUser } from '../slices/userSlice';
import CheckoutProduct from './checkoutproduct';
import "./payment.css"

function Payment() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const user = useSelector(selectUser);  
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
                          </div>    
                  </div>

            </div>
            
        </div>
    )
}

export default Payment
