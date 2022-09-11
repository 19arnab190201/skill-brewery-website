import "./App.css";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
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
        order={1}
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
        title='Who Started this'
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evoved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        image={grid}
      />

      <Grid
        order={0}
        title='Who Started this'
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evoved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"
        image={grid}
      />
    </div>
  );
}

export default App;
