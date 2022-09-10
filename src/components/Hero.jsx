import React from "react";
import heroimg from "../assets/test.png";

import "./Hero.css";
export const Hero = () => {
  return (
    <div>
      <div className='hero-bg'>
        <div className='hero-container'>
          <div className='hero-left'>
            <h1>Join the best thing to happen to summer since summer</h1>
            <div className='hero-search'>
              <input type='text' placeholder='Search for a camp' />
            </div>
          </div>
          <div className='hero-right'>
            <img src={heroimg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
