import React from 'react';
import '../CSS/productDetails.css';
import { useStateValue } from '../reactcontext/StateProvider';

function ProductDetails(props) {
    const { product} = props;

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => dispatch({
        type: 'ADD_TO_BASKET',
        payload: {
            id: product.id,
            name: product.name,
            details: product.details,
            rating: product.rating,
            price: product.price,
            image: product.image
        }
    })
    return (
        <div className="productdetails" key={product.id}>
            <img src={product.image} alt={product.name} className="productDetails__image"/>
            <div className="productdetails__info">
                <h4>{product.name}</h4>
                <p>{product.details}</p>
                <p><small>Rs</small>
                    <strong>{product.price}</strong>
                </p>
                <div className="productdetails__rating">
                    {
                        Array(product.rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
                <button onClick={addToBasket} className="productDetails__addTobasket">Add to basket</button>
            </div>
        </div>
    )
}

export default ProductDetails;
