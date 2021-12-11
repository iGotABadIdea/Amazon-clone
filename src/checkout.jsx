import React from 'react';
import { useSelector } from 'react-redux';
import "./Components/checkout.css";
import Subtotal from './Components/subtotal';
import CheckoutProduct from './Components/checkoutproduct';
import { selectItems, selectTotal } from './slices/cartSlice';
import { selectUser } from './slices/userSlice';

function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const user = useSelector(selectUser);  
    return (
        <div className="checkOut">
            <div className="checkoutLeft">
                <img className="checkoutAd" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt=""/>
                <div >
                    <h3> Hello, {user?.email}</h3>
                    <h1 className="checkoutTitle">
                        {items.length === 0? "Your Amazon Cart is empty": "Shopping Cart"}
                    </h1>
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
            <div className="checkoutRight">
                {items.length > 0 && (
                <>
                    <Subtotal items={items} total={total} />
                </>    
                )}
                
            </div>
        </div>
    )
}

export default Checkout
