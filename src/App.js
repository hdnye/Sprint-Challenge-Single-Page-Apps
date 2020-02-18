import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';


export default function App() {

  const [char, setChar] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <main>
      <Header />
        {/* <SearchForm /> */}
          <Route path='/character-list/' component={CharacterList} />     
             
         <Route exact path='/' component={WelcomePage} />
         {/* <Route path='/character-card/:id' render={(props) => {
            return (
              <CharacterCard {...props} charactercard={CharacterCard} />
            )
         }} />  */}
            </main>
    );
 }

ReactDOM.render(
  <Router>
    <Header />
    <WelcomePage />
  </Router>,
  document.getElementById("root")
);