import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/Characters' component={CharacterList} />
      <Route exact path='/' component={WelcomePage} />
    </main>
  );
}

ReactDOM.render(
  <Router>
    <Header />
  </Router>,
  document.getElementById("root")
);