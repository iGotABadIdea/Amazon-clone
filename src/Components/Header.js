import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectItems } from '../slices/cartSlice';
import { selectUser } from '../slices/userSlice';
import { auth } from '../firebase';

function Header() {
    const user = useSelector(selectUser); 
    const items = useSelector(selectItems);
    const handleAuthentication =()=>{
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/"><img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-logo-img"/> 
            </Link>            
            <div className="header_search">
                <input type="text" className="header_searchInput"/><SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick = {handleAuthentication} className="header_option">
                    <span className='header_optionLineOne'>{user ? `Hello ${user.email}` : "Hello Guest"}</span>         
                    <span className="header_optionLineTwo">{user ? 'Sign Out' : "Sign In"}</span>
                </div>
                </Link>
                
                <div className="header_option">
                     <span className='header_optionLineOne'>Returns</span>
                    <span className="header_optionLineTwo">Orders</span>
                </div>
                   
                <div className="header_option">
                     <span className='header_optionLineOne'>Your </span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                 <div className="header_optionCart">
                    <ShoppingCartIcon/>
                    <span className="header_optionLineTwo header_cartCount">{items.length}</span>
                </div>
                </Link>
                </div>
            

        </div>
    )
        
}

export default Header 

