import "./App.css";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import applicant from "./assets/application.svg";
import Grid from "./components/Grid";

// images

import grid from "./assets/grid.png";
import Card from "./components/Card";
import cardicon from "./assets/card-icon.png";
import aboutimg from "./assets/about.png";
function App() {
  return (
    <div className='App'>
      <NavBar />

      <Hero />
      <Grid
        className='main-grid'
        bg={0}
        order={0}
        title='Skill Brewery: Free Internship Program'
        text='Work on cool hands-on projects to amplify your profile. Gain an internship certificate, work experience and mentoring after the completion of the programme.'
        text2='Choose a domain of your interest and get started now! Please note that you can only complete one internship function at a time and will have to wait at least one month before pursuing another function.'
        image={aboutimg}
      />
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
      <Grid
        order={1}
        title='Application Process'
        text='Fill out the application below and follow us on Linkedin/Instagram'
        text2='Don’t forget to fill out the verification form (in the form of a Google Form) reading all instructions in the form carefully. Failure to follow the instructions will invite a fine /have your application deleted!  Both steps are compulsory!'
        image={applicant}
      />
    </div>
  );
}

export default App;
