import React, { useState, useEffect } from 'react';
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
import {useStateValue} from '../reactcontext/StateProvider';
import { auth } from '../firebase/firebase';
// import Chatbot from  'react-chatbot-kit';
// import config from "../chatbot/config";
// import MessageParser from "../chatbot/MessageParser";
// import ActionProvider from "../chatbot/ActionProvider";

function Main() {

    const [woodFinish, setWoodFinish] = useState(WOODFINISH)
    const [featuredProducts, setFinishedProduct] = useState(FEATUREDPRODUCT)
    const [metalFinish, setMetalFinish] = useState(METALFINISH)
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                //user is loggedin
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
            } else {
                //user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                })
            }
        })
        return () => {
            //Any cleanup
            unsubscribe();
        }
    }, [])

    console.log('user is >>>>>>>',user)

    
        const Details = ({match}) => {
            if(match.params.type === 'woodFinish'){
                return (
                    <ProductDetails 
                        product={woodFinish.filter((product) => product.id === parseInt(match.params.id))[0]}
                        />
                    )
                }
            else if(match.params.type === 'metalFinish'){
                return (
                    <ProductDetails 
                        product={metalFinish.filter((product) => product.id === parseInt(match.params.id))[0]}
                        />
                    )
                }
                else if(match.params.type === 'featuredProduct'){
                    return (
                        <ProductDetails 
                            product={featuredProducts.filter((product) => product.id === parseInt(match.params.id))[0]}
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
                        <Route exact path="/" component={() => <Home woodFinishProducts={woodFinish}
                                                                    featuredProducts={featuredProducts}
                                                                    metalFinishProducts={metalFinish}
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

export default Main;
