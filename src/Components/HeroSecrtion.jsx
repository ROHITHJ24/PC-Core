import React from 'react';
import { Link } from 'react-router-dom'; 
import WhiteCabinet from '../assets/whitecabinet.png';

const HeroSecrtion = () => {
  return (
    <>
      <div className="hero-sec">
        <div className="text-cont">
          <div className="type-parrent">
            <div>
              <h4 className="name">PerfomancePc.com</h4>
            </div>
          </div>

          <p className="title-desc">
            Gaming PCs made <br/>Simple
          </p>

          <p className="title-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Sit possimus <span className="high">sdhvdb hdbvde usdhvbds sgdhv</span> nisi in molestiae porro quaerat tenetur cupiditate <br />
            ducimus simus nisi in molestiae porro quaerat tenetur cupidita.
          </p>

     <Link to="/BuildPage" className="btn-primary">
  Start Building
</Link>

        </div>

        <div className="hero-img">
          <img src={WhiteCabinet} alt="White Gaming PC Cabinet" />
        </div>
      </div>

      <hr />
    </>
  );
};

export default HeroSecrtion;
