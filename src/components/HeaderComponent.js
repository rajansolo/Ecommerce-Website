import React, { Component } from 'react';
import '../CSS/header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../reactcontext/StateProvider';
import { auth } from '../firebase/firebase';

function Header(props) {

    const [{basket, user}] = useStateValue();
    // console.log(user);

    const login = () =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div>
            <nav className="header">
                <Link to="/">
                    <img 
                        className="header__image"
                        src="./assets/images/header/logo.png"
                        alt="logo"
                        />
                </Link>
                <div className="header__search">
                    <input className="header__searchInput"/>
                    <SearchIcon className="header__searchIcon"/>
                </div>
                <div className="header__nav">
                    <Link to={!user && "/login"} className="header__link">
                        <div onClick={login} className="header__option">
                            <span className="header__optionFirst">Helllo {user?.email} </span>
                            <span className="header__optionSecond">{user ? "sign out" : 'sign in'}</span>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionFirst">Returns</span>
                            <span className="header__optionSecond">& order</span>
                        </div>
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <span className="header__optionFirst"><ShoppingBasketIcon /></span>
                            <span className="header__optionSecond header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                </div>                
            </nav>
        </div>
    );
}


export default Header;