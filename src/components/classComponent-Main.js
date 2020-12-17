import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import AboutUs from './AboutusComponent';
import Login from './LoginComponent';
import Checkout from './CheckoutComponent';
import ProductDetails from './ProductDetails'
import { WOODFINISH } from '../shared/woodFinish'
import { FEATUREDPRODUCT } from '../shared/featuredProducts';
import { METALFINISH } from '../shared/metalFinish';
import {  Route, Switch, Redirect } from 'react-router-dom';
// import Chatbot from  'react-chatbot-kit';
// import config from "../chatbot/config";
// import MessageParser from "../chatbot/MessageParser";
// import ActionProvider from "../chatbot/ActionProvider";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            woodFinish : WOODFINISH,
            featuredProducts: FEATUREDPRODUCT,
            metalFinish: METALFINISH,
        }
    }

    

    render() {
        const Details = ({match}) => {
            if(match.params.type === 'woodFinish'){
                return (
                    <ProductDetails 
                        product={this.state.woodFinish.filter((product) => product.id === parseInt(match.params.id))[0]}
                        />
                )
                }
            else if(match.params.type === 'metalFinish'){
                return (
                    <ProductDetails 
                        product={this.state.metalFinish.filter((product) => product.id === parseInt(match.params.id))[0]}
                        />
                )
                }
                else if(match.params.type === 'featuredProduct'){
                    return (
                        <ProductDetails 
                            product={this.state.featuredProducts.filter((product) => product.id === parseInt(match.params.id))[0]}
                            />
                    )
                    }
        }

        return (
            <div>
                <Switch>
                <Route path="/login" component={Login} />
                <Route>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={() => <Home woodFinishProducts={this.state.woodFinish}
                                                                    featuredProducts={this.state.featuredProducts}
                                                                    metalFinishProducts={this.state.metalFinish}
                                                                    />} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path='/productDetails/:type/:id' component={Details}/>
                    </Switch>
                    {/* <Chatbot 
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    /> */}
                </Route>
                </Switch>
            </div>
        )
    }

}

export default Main;
