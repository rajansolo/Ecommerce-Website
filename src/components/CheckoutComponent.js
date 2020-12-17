import React from 'react';
import Subtotal from './Subtotal';
import { useStateValue } from '../reactcontext/StateProvider';
import CheckoutProducts from './CheckoutProductsComponent';
import '../CSS/checkout.css'

function Checkout() {
    const [{basket}] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">
                {
                    basket.length === 0 ? (
                        <h2 className="checkout__header">Your shopping basket is empty.</h2>
                    ) : (
                        <div>
                            <h2 className="checkout__header"> Your shopping basket </h2>
                            {
                                basket.map((item) => {
                                    console.log(item)
                                    return(
                                        <CheckoutProducts
                                            id={item.id}
                                            image={item.image}
                                            name={item.name}
                                            details={item.details}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                )})
                            }
                        </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                    <div className="checkout__right"> 
                        <Subtotal />
                    </div>
                )
            }
        </div>

    );

}


export default Checkout;
