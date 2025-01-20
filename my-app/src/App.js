import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frontpage } from "./components/Frontpage/Frontpage";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Frontpage />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
