import React from 'react'
import Card from './Card'
import cardicon from "../assets/card-icon.png";

const Courses = () => {
  return (
    <div className='course'>
        <h1>Courses</h1>
          <div
        style={{
          padding: "0px 120px",
          display: "flex",
          justifyContent: "center",
          gap: "4%",
          alignItems: "center",
        }}>
        <Card
          image={cardicon}
          title='Intern Connect'
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        />
        <Card
          image={cardicon}
          title='Intern Connect'
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        />
        <Card
          image={cardicon}
          title='Intern Connect'
          text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        />
      </div>
    </div>
  )
}

export default Courses