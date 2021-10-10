import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <React.Fragment>
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg"alt=""/>
            </div>
        <div className="home">
            
            <div>
            <div className="home_row">
            <Product/>
            <Product/>
            </div>
            <div className="home_row">
                
            </div>
            <div className="home_row">
                
            </div>
            </div>

        </div>
        </React.Fragment>
    )
}

export default Home
//dont have to waste time just do it 
//commenting to commit a change 



