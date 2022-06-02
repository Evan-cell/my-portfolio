import React from 'react'
import "./Header.css"
function Header() {
  return (
    <header className='header'>
        <div className="container d-flex">
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="nav-link">
                <ul className="link f-flex uppercase">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">features</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#clients">clients</a></li>
                    <li><a href="#blogs">blogs</a></li>
                    <li><a href="#contact">contact</a></li>
                    <button className="home-btn">Hire me</button>
                </ul>
                <button className="toggle">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header