import React from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import MemberSlide from "./components/memberSlide";
import OurMemory from "./components/ourMemory";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <MemberSlide/>
      <OurMemory/>
    </div>
  );
}

export default App;
