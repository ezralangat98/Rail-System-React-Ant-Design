import React from "react";
import About from "../Home/About";
import AppFeatures from "../Home/Features";
import AppDescription from "../Home/Description";

// Views
const AppHome = () => {
  return (
    <div>
        <AppDescription/>
        <About/>
        <AppFeatures/>
    </div>
  )
}

export default AppHome
