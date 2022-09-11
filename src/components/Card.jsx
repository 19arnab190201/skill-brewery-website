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
        }}>
        {title}
      </h1>
      <p
        style={{
          lineHeight: "32px",
          paddingBottom: "20px",
        }}>
        {text}
      </p>
    </div>
  );
};

export default Card;
