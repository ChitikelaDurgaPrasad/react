import React from 'react'

const Header = () => {
  return (
    <div className="headsection">
        <div className="left">
            <h2>Shopping Mall</h2>
        </div>
        <div className="center">
            <ul>
                <li>Woman</li>
                <li>Men</li>
                <li>Child</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="middle">
            <input type="text" placeholder='search..'></input>
        </div>
        <div className="right">
            <div className="signin">
                sign/signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>

    </div>
    
  )
}

export default Header
