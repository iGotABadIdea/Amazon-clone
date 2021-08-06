import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header.logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"/>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
            </div>
            <div classname="header_nav"></div>

        </div>
    )
        
}

export default Header 
