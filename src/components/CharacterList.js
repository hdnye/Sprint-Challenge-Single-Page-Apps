import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [char, setChar] = useState([]);
  console.log('char', char);
  const [update, updateChar] = useState([]);

  const search = charArr => {
    updateChar(charArr);
  }

  // const search =(charArr) => {
  //   setChar(charArr)
  // }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getCharacters = () => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setChar(response.data.results);
          updateChar(response.data.results);
          console.log(response.data.results);
         // updateChar(response.data.results);
        })
        .catch(error => {
          console.log('Oops!', error);
        })
      
    // getCharacters(); 

  }, []);


  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link to={'/'}>Home</Link>
       <SearchForm search={search} char={char} />
        {update.map(chars => {
             return <CharacterCard key={chars.id} character={chars} />
           })}
     </section>
     );
    }

    {/* {char.map(chars =>    
      <CharacterDetails key={chars.id} chars={chars} />
    )};
    </section>
   )
  }

  function CharacterDetails({ char }) {
    return <CharacterCard char={char} />
   } */}
  