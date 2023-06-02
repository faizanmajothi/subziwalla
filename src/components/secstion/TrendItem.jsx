import React, { Fragment } from "react";
import "./TrendItem.css";
const TrendItem = (props) => {
  return (
    <Fragment>
      <div className="single-card">
        <button className="btn1">
          
        <div className="container">
          <div className="item-imgs">
            <img src={props.src} alt="frutis" />
          </div>
        </div>
        <div className="font">
          <h6>{props.title}</h6>
        </div>
        </button>
      </div>
    </Fragment>
  );
};

export default TrendItem;
