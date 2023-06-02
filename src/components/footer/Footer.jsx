import React from "react";
import "./Footer.css"
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
const Footer = () => {
  return (
    <div className="container">

    <div className="footer-container">
      <div className=""></div>
        <LocalShippingOutlinedIcon className="truck" />
      <div className="footer-cart">
        <h4>FREE SHIPPING</h4>
        <h6>ON ORDER OF ${50}</h6>
      </div>
        <TtyOutlinedIcon  className="phone"/>
      <div className="footer-cart">
        <h4>24 X 7 SERVICE</h4>
        <h6>ONLINE SERVICE FOR</h6>
      </div>
        <CurrencyExchangeOutlinedIcon className="return" />
      <div className="footer-cart">
        <h4>EASY RETURN</h4>
        <h6>NO QUESTION ASK</h6>
      </div>
        <AccountBalanceOutlinedIcon className="payment"/>
      <div className="footer-cart">
        <h4>ONLINE PAYMENT</h4>
        <h6>SECURE AND SAFE</h6>
      </div>
    </div>
    </div>
  );
};

export default Footer;
