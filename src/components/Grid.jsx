import React from "react";
import "./Grid.css";

const Grid = ({ title, text, image, order, text2 }) => {
  console.log(image);
  return (
    <div
      className='grid-container'
      style={{
        flexDirection: order === 1 ? "row" : "row-reverse",
        backgroundColor: order === 1 ? "#fff" : "#f7f7f7",
      }}>
      <div className='grid-left'>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: "#222f3e",
          }}>
          {title}
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            lineHeight: "25px",
            color: "#576574",
          }}>
          {text}
        </p>
        <br />
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            lineHeight: "25px",
            color: "#576574",
          }}>
          {text2}
        </p>
      </div>
      <div className='grid-right'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default Grid;
