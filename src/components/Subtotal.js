import React from 'react';
import '../CSS/subtotal.css';
import {useStateValue} from '../reactcontext/StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reactcontext/reducer';

function Subtotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <strong>
                <CurrencyFormat 
                // renderText={(value) => (
                //     <>
                //         <p>
                //             Subtotal ({basket.length} items):<strong>{value}</strong>
                //         </p>
                //         <h1>kjsdkjhkjf</h1>
                //     </>
                // )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'Rs'}
            />
            </strong>
            </p>
            <button className="subtotal__button"> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
