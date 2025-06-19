import React from 'react'
import search from '../assets/search.png'
import home from '../assets/home.png'
import cart from '../assets/cart.png'

const NavBar = () => {
  return (
    <div>
      <div className="top-of-nav">
        <p>Click here to learn more</p>
      </div>
      <nav >
        <h1 >PerfomancePc</h1>
        <div>

          <ul className='nav-links'>
            <li ><a href="#" id='nlink'>HOME</a></li>
            <li className='gamming-pc-link'><a href="#gamming-pc" id='nlink'>GAMMING PC </a>
            

            </li>
            <li><a href="#" id='nlink' className='software-link'>SOFTWARE </a>
              <div className="software">
                
               <p>system software, 
                 application software,
                and programming software.</p>
              </div>
            </li>
            <li><a href="#" id='nlink' className='product-link'>PRODUCT</a>
              <div className="product">
                <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing <br /> elit.</p>
              </div>
            </li>
            <div className="drop-down">

            </div>
          </ul>
        </div>
        <div className="nav-icons">
          <div className="search-bar">

            <input type="text" placeholder='search...' />
            <img id='nav-icon' className='search-icon' src={search} alt="" />
          </div>
          <img id='nav-icon' src={home} alt="" />
          <img id='nav-icon' src={cart} alt="" />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
