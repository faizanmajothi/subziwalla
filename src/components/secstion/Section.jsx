import React from "react";
import banner from "../../asset/banner.jpg";
import "./Section.css";
import TrendItem from "./TrendItem";
import Dummy_items from "./Dummy_items"

const Section = () => {
  return (
    <section>
      <div className="container ">
        <div className="item-container">
      
        {Dummy_items.map((item)=>{
          return <TrendItem key={item.id} src={item.src} title={item.title}/>
        })}
      
        </div>
      </div>
      <img className="banner-img" src={banner} alt="banner" width="100%" />
    </section>
  );
};

export default Section;
