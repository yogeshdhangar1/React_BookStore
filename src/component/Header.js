import React,{Component} from "react";
import './Header.css';
import bookLogo from "../assets/Books/book2.png"
import { Link } from '@mui/material';
import cart from "../assets/Books/cart.jpg";
class Header extends Component{
    render(){
        return(
            <div>                
            <header  className="header-content header">                
                <div className="logo-content">
                   <Link href='/home'> <img src={bookLogo} alt="" width="60px"/></Link>
                    <div>
                        <span className="address-text">BOOK</span><br />
                        <span className="address-text address-book">STORE</span>
                    </div>
                    </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                        <img src={cart} alt="Cart"/>
                        </Link>
                    </li>
                </ul>
                </div>
            </header>
        </div>
        );
    }
}
export default Header;