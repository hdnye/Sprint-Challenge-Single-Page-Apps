import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


export default function App() {

  const [char, setChar] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <main>
      <Header />
        <SearchForm />
          <Route path='/characterlist/:id' render={(props) => {
            return (
             <CharacterList {...props} searchForm={(sform) =>
               setQuery( [...props, sform ])} />     
             )
           }} />     
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' comoponent={CharacterList} />
      </main>
    );
 }

ReactDOM.render(
  <Router>
    <Header />
  </Router>,
  document.getElementById("root")
);