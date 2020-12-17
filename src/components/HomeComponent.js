import React, { Component } from 'react';
import '../CSS/home.css';
import { useStateValue } from '../reactcontext/StateProvider';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {

        const woodFinish = this.props.woodFinishProducts.map((item) => {
           return <RenderProduct type="woodFinish" item={item} key={item.id} />
        });

        const metalFinish = this.props.metalFinishProducts.map((item) => {
            return <RenderProduct type="metalFinish" item={item} key={item.id} />
        });

        const featuredProducts = this.props.featuredProducts.map((item) => {
            return <RenderProduct type="featuredProduct" item={item} key={item.id} />
         });

        return (
            <div className="home">
                <div className="home__banner">
                    <img className="home__banner__image" src="./assets/images/banner/banner.webp"  alt="banner" />
                </div>

                <h3 className="home__header"> Featured Products </h3>
                <div className="products">
                    <div className="product__row">
                        {featuredProducts}
                    </div>
                    <h3 className="home__header"> Metal Finish Products </h3>
                    <div className="product__row">
                        {metalFinish}
                    </div>
                    <h3 className="home__header"> Wood Finish Products </h3>
                    <div className="product__row">
                        {woodFinish}
                    </div>
                </div>
            </div>
        )
    }
}

function RenderProduct({item, type}){ 
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => dispatch({
        type: 'ADD_TO_BASKET',
        payload: {
            id: item.id,
            name: item.name,
            details: item.details,
            rating: item.rating,
            price: item.price,
            image: item.image
        }
    })

    return(
        <div className="product" key={item.id}>
            <div className="product__info">
                <h4>{item.name}</h4>
                <p>{item.details}</p>
                <p><small>Rs</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(item.rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
            </div>
            <img src={item.image} alt={item.name} className="product__image"/>
            <div className="buttons">
                <button onClick={addToBasket} className="home__addTobasket">Add to basket</button>
                <Link to={`/productDetails/${type}/${item.id}`} className="ProductDetails"><button>Product Details</button></Link>
            </div>
        </div>
        
    );
}

export default Home;