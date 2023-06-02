import React from 'react'
import "./TopHeader.css"

const TopHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg pd-0 top-header" style={{padding:0}}>
      <div className='container'>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href = "#">Do we deliver to your area?</a>
      </li>
      
    </ul>
    <ul className='navbar-nav'>
    <li className="nav-item discount">
        <a className="nav-link" href = "#">20% Discount fore Users|Code:<span>NEWSW2019</span></a>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href = "#">Reorder |</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href = "#">My Favorites({0}) |</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href = "#">Contact Us</a>
      </li>
    </ul>
  </div>
    
</nav>
  )
}

export default TopHeader
