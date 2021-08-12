import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-logo-img"/>
            <div className="header_search">
                <input type="text" className="header_searchInput"/><SearchIcon className="header_searchIcon"/>
            </div>
            <div classname="header_nav">
                <div className="header_option">
                    <span className='header_optionLineOn'>Hello Guest</span>
                    <span className="header_optionLinetwo">Sign In</span>
                </div>
                <div className="header_option"></div>
                    <span className='header_optionLineOn'>Returns</span>
                    <span className="header_optionLinetwo">Orders</span>
                <div className="header_option"></div>
                    <span className='header_optionLineOn'>Your </span>
                    <span className="header_optionLinetwo">Prime</span>
            </div>
            

        </div>
    )
        
}

export default Header 
