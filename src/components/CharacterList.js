import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios
      .get('https:rickandmortyapi.com/api/character/')
        .then(response => {
          setChar(response.data)
         })
        .catch(error => {
          console.log('Oops!', error);
        })
     
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      
      {char.map((chars => {
         return(<CharacterCard 
              key={chars.id} 
              name={chars.name} 
              status={chars.status} 
              species={chars.speices} 
              gender={chars.gender}
              image={chars.image} />)
      }
      ))}
    </section>
  );
}
