import React from 'react';
import { useStateValue } from '../reactcontext/StateProvider';
import '../CSS/checkoutproducts.css';

function CheckoutProducts({image,name,details,price,rating,id}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }


    return (
        <div className="checkoutproducts">
            <img src={image} className="checkoutproducts__image" alt={name} />
            <div className="checkoutproducts__info">
                <h4>{name}</h4>
                <p>{details}</p>
                <p><small>Rs </small><strong>{price}</strong></p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
                <button className="checkoutproducts__button" onClick={removeFromBasket}>  Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts;
