import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Popup } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper" style={{ overflow: "hidden" }}>
            <div className="container-fluid" style={{ paddingLeft: "70px" }}>
                <Link to="/" className="brand-logo"><img src="images/MandeeLogo.jpg" alt="" style={{ fontSize: "60px", height: "80px", width: "80px" }}></img></Link>
                <ul className="right">
                    {/* <li><Link to="/Home" style={{ color: "black" }}>Shop</Link></li> */}
                    {/* <li><Link to="/cart">My cart</Link></li> */}
                    <Popup
                        trigger={
                            <li><Link to="/"><i className="material-icons" style={{ fontSize: "50px", width: "40px" }}>shopping_cart</i></Link></li>
                        }
                        content='Mandee is undergoing revam will be back soon!!!!'
                        inverted
                    />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;