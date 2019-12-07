import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [char, setChar] = useState([]);
  const [update, updateChar] = useState([]);

  const search = newCharArr => {
    updateChar(newCharArr);
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios
      .get(`https:rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log(response.data.results);
          setChar(response.data.results)
          updateChar(response.data.results);
         })
        .catch(error => {
          console.log('Oops!', error);
        })
     
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <SearchForm search={search} char={char} />
     {update.map(chars => {
       return <CharacterCard key={chars.id} chars={chars} />
     })}
     </section>
     );
    }