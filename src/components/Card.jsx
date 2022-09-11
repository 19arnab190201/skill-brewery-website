import React from "react";

const Card = ({ title, text, image }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        display: "flex",
        flexDirection: "column",
        width: "18vw",
        padding: "20px",
        borderRadius: "5px",
      }}>
      <img width='100px' height='90px' src={image} alt={text} />
      <h1
        style={{
          padding: "15px 0px",
          fontSize: "24px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          color: "#222f3e",
        }}>
        {title}
      </h1>
      <p
        style={{
          lineHeight: "32px",
          paddingBottom: "20px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          color: "#576574",
        }}>
        {text}
      </p>
    </div>
  );
};

export default Card;
