import React from "react";
import "./Grid.css";

const Grid = ({ title, text, image, order }) => {
  console.log(image);
  return (
    <div
      className='grid-container'
      style={{
        flexDirection: order === 1 ? "row" : "row-reverse",
        backgroundColor: order === 1 ? "#fff" : "#f7f7f7",
      }}>
      <div className='grid-left'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className='grid-right'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default Grid;
