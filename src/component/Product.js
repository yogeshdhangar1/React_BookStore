import React from "react";
import "./Product.css"
import logo1 from "../assets/Books/bhagvadgita.jpg";
import logo2 from "../assets/Books/book1.jpg";
import logo3 from "../assets/Books/book3.jpg";
import logo4 from "../assets/Books/book4.jpg";
import logo5 from "../assets/Books/book5.jpg";
import logo6 from "../assets/Books/book6.jpg";
import logo7 from "../assets/Books/book7.jpg";
import logo8 from "../assets/Books/book8.jpg";
import logo9 from "../assets/Books/book9.jpg";
import logo10 from "../assets/Books/book10.jpg";

const Product =({Productitem}) =>{
    return(
        
        <div className="products">
            <div className="card">
            <acronym title = "Lord Krishan Teach Arjun Life Truth ">  
            <img className="product-image" src={logo1} alt ="iamge">
            </img>
            </acronym>
            <div>
                <h3 className="product_name">Bhagvat Geeta </h3>
            </div>
            <div className="Product-price"> 1200 $</div>
            <div>
                <button className="product-add-button"> Add To Card</button>
            </div>
        </div>
        <div className="card">
                <div>
                    <acronym title = "How To Build Your Think ">
                    <img className="product-image" src={logo2} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Intruduction of Think </h3>
                </div>
                <div className="product-price">700$</div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                    <acronym title = "Power Of Human Mind ">
                    <img className="product-image" src={logo3} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Power Of Mind </h3>
                </div>
                <div className="product-price">1560 $ </div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                <acronym title = "Power Of Think ">
                    <img className="product-image" src={logo4} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Power Of Think </h3>
                </div>
                <div className="product-price">200 $ </div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
              <div className="card">
                <div>
                <acronym title = "Power Of Human Emotion ">
                    <img className="product-image" src={logo5} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Power Of Emotion</h3>
                </div>
                <div className="product-price">250 $ </div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                <acronym title = "Power Of Mediation">
                    <img className="product-image" src={logo6} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Power Of Mediation</h3>
                </div>
                <div className="product-price">1050 $ </div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                <acronym title = "Power Of Nature ">
                    <img className="product-image" src={logo7} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Power Of Nature </h3>
                </div>
                <div className="product-price">1000 $ </div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                <acronym title = "About Life Shiavji Maharaaj  Battle Of Mughal Samrajya Established Own Space Swarajya "> 
                    <img className="product-image" src={logo8} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Story Of Maratha Empire </h3>
                </div>
                <div className="product-price">2500 $</div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                <acronym title = "How To Face With Failure To Overcome with Chankya Nitti ">
                    <img className="product-image" src={logo9} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Chankya Nitti </h3>
                </div>
                <div className="product-price">100 $ </div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>
            <div className="card">
                <div>
                <acronym title = "How To Acchive Goal ">
                    <img className="product-image" src={logo10} alt="Image"/>
                    </acronym>
                </div>
                <div>
                    <h3 className="product_name">Power Of Thoughts </h3>
                </div>
                <div className="product-price">1551 $</div>
                <div>
                    <button className="product-add-button">Add to Cart</button>
                </div>
            </div>

        </div>
    );
}
export default Product;