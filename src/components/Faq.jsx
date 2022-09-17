

import React from 'react'
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import "../components/Grid.css";
import "../components/Faq.css";
const { Panel } = Collapse;
const Faq = ({image,order}) => {
  

const faqData = [
{
        
        title:" How do I know that I have been accepted or rejected from one of the Codevita Live’s workshops?",
        text:" It doesn’t takes us more than a week to review your application and delight you with that acceptance you have been waiting for. Beyond that, it might turn out that we couldn’t accept you in that cohort . There is no reason to be demotivated here ,as maybe we thought that you are more suitable to be a future Puskas award winner than a STEM leader, or maybe you were way too overpowered and we thought we won’t be able to contribute in your growth. Or maybe just the cohorts were full . In any of the case, if you want to feel how the Codevita Edge feels like you can always mail us at our official ID to see what is in store for you!",

    },
     {
        
        title:"Can I get an application fee waiver?",
        text:"Ofcourse! But you will have to pay us with your souls! We meant putting in your hearts and souls in making the Earth a better place . Mail us your application at our official Student Connect ID and follow it up with a picture of tree sampling that you recently planted . We will straightforward process your application.",

    },
     {
        
        title:"Can I donate or volunteer with Codevita Live ?",
        text:"You can definitely volunteer with Codevita Live! Mail us with your proposal on our official ID and if you would like to donate some goodies to the underprivileged children that we cater you could reach out as well!",

    },
     {

        title:"Can I request more financial aid after completing the Codevita Live Scholarship Exam?",
        text:"Ultimately, Codevita Live is a goodwill organization on a mission to train children into future STEM leaders . We offer need based aid as well!",

    },
     {
        
        title:"Can I audit Codevita Live’s courses for free?",
        text:"Well definitely yes ,provided you get accepted .Otherwise there is no conventional way you can audit Codevita Live’s courses for free. You can take a look at the Powershot series.You can contact us with any titles on our official ID and we will be in touch with you soon!",

    },
]

 const onChange = (key) => {
    console.log(key);
  };
  return (
    <div
      className='grid-container'
      style={{
        flexDirection: order === 1 ? "row" : "row-reverse",
        backgroundColor: order === 1 ? "#fff" : "#fff",
      }}>
      <div className='grid-left'>
         <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            color: "#222f3e",
            width: "100%",
            marginBottom: "40px",
          }}>
          Frequently Asked Question
        </h1>
        <Collapse      className="site-collapse-custom-collapse"
 accordion bordered={false} defaultActiveKey={['0']} onChange={onChange}>
            {faqData.map((item, index) => {
                return (
                    <Panel className="site-collapse-custom-panel" header={item.title} key={`${index}`}>
                        <p>{item.text}</p>
                    </Panel>
                )
            })}
     
      

    </Collapse>
      </div>
      <div className='grid-right'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default Faq