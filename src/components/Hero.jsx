import React from "react";
import heroimg from "../assets/test.png";
import line1 from "../assets/line1.svg";

import "./Hero.css";
export const Hero = () => {
  return (
    <div>
      <div className='hero-bg'>
        <div className='left-round'></div>
        <div className='hero-container'>
          <div className='hero-left'>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "42px",
                color: "#222f3e",
              }}>
              Join the best thing to happen to summer since summer
            </h1>
            <div className='hero-search'>
              <input
                type='text'
                placeholder='Search for a camp'
                className='search'
              />
            </div>
          </div>
          <div className='hero-right'>
            <img src={line1} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
