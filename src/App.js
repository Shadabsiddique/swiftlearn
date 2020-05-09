import React from 'react';
import './App.css';
import {Slider, CardItem} from "./components/Slider";
import {Header} from './components/Header';
import {HeadingPair} from './components/HeadingPair';
import {PageBar} from './components/PageBar';


const list = [
  {src:"https://www.youtube.com/embed/-sNWKbnaFkg"},
  {src:"https://www.youtube.com/embed/V1Pl8CzNzCw"},
  {src:"https://www.youtube.com/embed/60ItHLz5WEA"},
  {src:"https://www.youtube.com/embed/RBumgq5yVrA"},
  {src:"https://www.youtube.com/embed/1G4isv_Fylg"},
  {src:"https://www.youtube.com/embed/pXRviuL6vMY"},
  {src:"https://www.youtube.com/embed/HM_fO7gBUl4"},
  {src:"https://www.youtube.com/embed/SYM-RJwSGQ8"},
];

function App() {
  return (
  <div>
    <Header />
    <HeadingPair className="first-head" heading={"Concept Videos"} subHeading={"Select a number"}/>
    <Slider
      list={list}
      renderItem={CardItem}
      width={500}
      boxWidth={1000}
      opacity={0.75}
      scale={0.9}
      disableNext={false}
      disablePrev={false}
      index={3}
      onChange={(number, any) => {
      }}
    />
    <HeadingPair className="second-head" heading={"Live Clasess"} subHeading={"Select a number"}/>

    <PageBar data={[3,4,5,6,7,8,9]} />
    

  </div>
  
  );
}

export default App;
