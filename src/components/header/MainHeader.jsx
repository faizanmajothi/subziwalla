import React from "react";
import subImg from "../../asset/subziwalla.png";
import "./MainHeader.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import SearchIcon from '@mui/icons-material/Search';
const MainHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg main-header" style={{padding:"1%"}}>
      <div className="container">
        <a className="navbar-brand mainheader-logo" href="#">
          <img src={subImg} alt="subziwalla" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item short">
            <a className="nav-link" href="#">
              SHORT BY
            </a>
          </li>
        </ul>
        <form className="form-inline search-form">
          <input
            className="search"
            type="search"
            placeholder="I'm Looking for..."
            aria-label="Search"
          /><SearchIcon className="search-icon"/>
        </form>

        <ul className="navbar-nav nav-log">
          <li className="nav-item ">
            <a className="nav-link" href="#" style={{ marginRight: "-12px" ,marginTop:"-3px"}}>
          <PeopleOutlineOutlinedIcon className="log-in" />
              Login |
            </a>
          </li>
         
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Signup
            </a>
          </li>
        </ul>

        <button className="btn0">
          <div className="cart">
          
              <ShoppingCartOutlinedIcon className="log-icon"></ShoppingCartOutlinedIcon>
              <sup>{3}</sup>
          
            <span>${22.52}</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default MainHeader;
