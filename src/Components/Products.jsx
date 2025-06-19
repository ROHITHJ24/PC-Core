import React from 'react'
import intel from '../assets/intel.jpg'
import processor from '../assets/processor.webp'
import motherboard from '../assets/motherboard.webp'
import ram from '../assets/ram.webp'
import gpu from '../assets/gpu.webp'
import rgbfan from '../assets/rgbfan.webp'
import ssd from '../assets/ssd.webp'
import harddisk from '../assets/harddisk.webp'
import cabinet from '../assets/cabinet.webp'
import psu from '../assets/psu.webp'
import iem from '../assets/iem.webp'
import keyboard from '../assets/keyboard.webp'
import mouse from '../assets/mouse.webp'
import headset from '../assets/headset.webp'
import monitor from '../assets/monitor.webp'



const Products = () => {
  return (
    <>
    <div className="product-description">
      <h1>Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
    <div className='products-cont'>
      <div className="product-box">
        <img src={processor} alt="processor" />
        <h6>Processors</h6>
        <p className="">
          Explore 
        </p>
      </div>
     <div className="product-box">
        <img src={motherboard} alt="" />
        <h6>Motherboard</h6>
      <p className="">
          Explore 
        </p>
      </div>
       <div className="product-box">
        <img src={ram} alt="" />
        <h6>RAM</h6>
       <p className="">
          Explore 
        </p>
      </div>
      <div className="product-box">
        <img src={gpu} alt="" />
        <h6>GPU</h6>
     <p className="">
          Explore 
        </p>
      </div>
    <div className="product-box">
        <img src={rgbfan} alt="" />
        <h6>RGB FANS</h6>
       <p className="">
          Explore 
        </p>
      </div>
       <div className="product-box">
        <img src={ssd} alt="" />
        <h6>SSD</h6>
      <p className="">
          Explore 
        </p>
      </div>
       <div className="product-box">
        <img src={harddisk} alt="" />
        <h6>Hard Disk</h6>
      <p className="">
          Explore 
        </p>
      </div>
        <div className="product-box">
        <img src={cabinet} alt="" />
        <h6>Product name</h6>
      <p className="">
          Explore 
        </p>
      </div>
       <div className="product-box">
        <img src={psu} alt="" />
        <h6>Product name</h6>
       <p className="">
          Explore 
        </p>
      </div>
      <div className="product-box">
        <img src={iem} alt="" />
        <h6>In Ear Monitors</h6>
      <p className="">
          Explore 
        </p>
      </div>
       <div className="product-box">
        <img src={keyboard} alt="" />
        <h6>Keyboard</h6>
       <p className="">
          Explore 
        </p>
      </div>
      <div className="product-box">
        <img src={mouse} alt="" />
        <h6>Mouse</h6>
     <p className="">
          Explore 
        </p>
      </div>
      <div className="product-box">
        <img src={headset} alt="" />
        <h6>Headset</h6>
        <p className="">
          Explore 
        </p>
      </div>
      <div className="product-box">
        <img src={monitor} alt="" />
        <h6>Product name</h6>
    <p className="">
          Explore 
        </p>
      </div>
    </div>
    </>
  )
}

export default Products
