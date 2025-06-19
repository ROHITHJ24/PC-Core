import React from 'react'
import ryzen from '../assets/ryzen.jpg'
import razor from '../assets/razor.jpg'
import nvidia from '../assets/nvidia.jpg'
import intel from '../assets/intel.jpg'
import AntE from '../assets/antesports.jpg'
import msi from '../assets/msi.jpg'

const GammingPc = () => {
    return (
        <>
            <div className="gamming-pc" id='gamming-pc'>
                <h1 className="gp-heading">
                    BUILD YOU GAMMIING PC ONLINE!

                </h1>
                <p>Welcome to <span className='gp-name'>YOUR NAME</span>, your trusted destination for PC builds br  and customization. With a rich legacy of 25 years in the computer and gaming peripheral market, we offer you the expertise and resources to create your perfect PC. Our user-friendly online platform allows you to unleash your creativity and build your own PC from the scratch starting from Processor, Motherboard, Graphics Card etc. Choose from a wide range of high-quality components, including processors, motherboards, graphics cards, and monitors. Customize every aspect of your PC build with ease, and enjoy the convenience of instant quotations. Experience the joy of personalized computing with Ankit Infotech – PC Studio, where PC building meets limitless possibilities.</p>
                <button className='explore-gpc'>EXPLORE</button>
            </div>

            <marquee  behavior="scroll" direction="right" scrollamount="60"  >
            <div className="gamming-img-cont">
                
                
                <div className="gamming-im">
                    <img src={ryzen} alt="" />
                </div>
                <div className="gamming-im">
                    <img src={razor} alt="" />
                </div>
                <div className="gamming-im">
                    <img src={nvidia} alt="" />
                </div>
                <div className="gamming-im">
                    <img src={intel} alt="" />
                </div>
                <div className="gamming-im">
                    <img src={AntE} alt="" />
                </div>
                <div className="gamming-im">
                    <img src={msi} alt="" />
                </div>
                {/* </div> */}
            </div>
            </marquee>
            <hr />

        </>
    )
}

export default GammingPc
