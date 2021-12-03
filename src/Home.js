import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
       <div className="home">
           <div className="home_container">
               <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg"alt="home_image"/>
               <div className="home_row">
                   <Product 
                   id="7ec467fd-4128-43f6-afee-04ebc1191f74"
                   title="Acer Predator Helios 300 Gaming Laptop Intel Core I7 10th Gen - (16 GB/1TB HDD+256 GB SSD/ Nvidia RTX 3060/Windows 10 Home/144hz) 15.6 Inches) FHD IPS Display"
                   price={1199.99}
                   image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg" 
                   rating={5}/>
                   <Product
                    id="44a05a49-3084-473c-935f-79a14fc50a4b"
                    title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                     price={40.02}
                     image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg" srcset="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg 1x"
                     rating={5}/>
               </div>
               <div className="home_row">
                     <Product 
                      id="2e0a8889d-8deb-4bf5-96df-37837f7b4ea2"
                     title="New Apple iPhone 12 Pro Max (512GB) - Silver"
                     price={2000.45}
                     image="https://m.media-amazon.com/images/I/71umuN8XVeL._AC_UY218_.jpg"
                     rating={5}
                    />
                    <Product
                     id="647d4064-bde2-4d04-b0ac-0b5eaacd1260"
                    title="boAt Rockerz 510 Wireless Bluetooth On Ear Headphones with Mic (Raging Red)"
                    price={21.34}
                    image="https://m.media-amazon.com/images/I/61YvHa6o94L._AC_UY218_.jpg"
                    rating={4}
                    />
                     <Product
                      id="fdf2f5b2-84ad-4033-ae4e-59ee83e3c2cc"
                    title="Harry Potter and the Cursed Child: Special Rehearsal Edition Script (Thorndike Press Large Print Literacy Bridge Series) Library"
                    price={11.34}
                    image="https://m.media-amazon.com/images/I/91cNTYvf5vL._AC_UY218_.jpg"
                    rating={5}
                    />
               </div>
               <div className="home_row">
                    <Product
                     id="d4ca0c23-06b2-4210-bc58-10225b3fdf4e"
                    title="Sony Bravia 164 cm (65 inches) XR series 4K Ultra HD Smart OLED Google TV XR-65A80J (Black) (2021 Model) | with Alexa Compatibility"
                    price={3549.69}
                    image="https://m.media-amazon.com/images/I/8116TOvxtsL._AC_UY218_.jpg"
                    rating={5}
                    />
                   </div> 

       </div>
       </div>
    )
}

export default Home
//dont have to waste time just do it 
//commenting to commit a change 



