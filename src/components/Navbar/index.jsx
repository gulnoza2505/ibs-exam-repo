import React from "react";
import { Link, useLocation } from "react-router-dom";
import Product from "../../assets/image/shopping-bag.png";
import Cart from "../../assets/image/shopping-cart.png";
import Customer from "../../assets/image/people.png";
import Dashboard from "../../assets/image/dashboard.png";
import { ImgActive, LiBox, NavbarWrapper } from "./style";

function Navbar() {
  // const {fname,lname}
  const location = useLocation();
  console.log(location);

  return (
    <NavbarWrapper>
      <div className="navbar-logo">
        <p>E-commers</p>
      </div>
      <div className="nav-navbar">
        <ul className="nav">
          <LiBox active={location.i==='/'}>
            <Link to="/" className="link" >
              <img src={Dashboard} />
              <p>Dashboard</p>
            </Link>
          </LiBox>
          <LiBox active={location.i==='/products'}>
            <Link to="/products" className="link" >
              <img src={Product} />
              <p>Products</p>
            </Link>
          </LiBox>
          <LiBox active={location.i==='/cart'} >
            <Link to="/cart" className="link" >
              <img src={Cart} />
              <p>Cart</p>
            </Link>
          </LiBox>
          <LiBox active={location.i==='/history'}>
            <Link to="/history" className="link">
              <img src={Customer} />
              <p>History</p>
            </Link>
          </LiBox>
        </ul>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
