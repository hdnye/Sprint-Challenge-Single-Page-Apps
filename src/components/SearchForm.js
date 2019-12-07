import React, { useState } from "react";
import axios from 'axios';




export default function SearchForm(props) {
 
  const [char, setChar] = useState();
  // const [query, setQuery] = useState();

  // useEffect(() => {
  //   axios.get(`https://rickandmortyapi.com/api/character/`)
  //     .then(response => {
  //       const character = response.data.results.filter(char => {
  //         return  char.name.toLowerCase().includes(query.toLowerCase()) !== -1;
  //       });
  //      setChar(character);
  //  }, [query]);

const handleInputChange = (event) => {
    setChar(event.target.value);
    // console.log(char);
}

const submitHandler = (event) => {
  event.preventDefault();
  const name = props.characters && props.characters.filter(chars => {
            return  chars.name.toLowerCase().indexOf(char.toLowerCase()) !== -1;
          });
      setChar(name);
        // console.log(character);
       };

  return (
    <section className="search-form">
     {/* Add a search form here */}
     <h1>Search Form</h1>
       <form onSubmit={submitHandler}>
         {/* Enter character search field */}
         <label htmlFor='name'></label>
           <input
             type='text' 
             id='name'
             name='name'
             placeholder='Name' 
             value={props.name} 
             onChange={handleInputChange} 
            />                
       <button type='submit'>Submit</button>
     </form>
   </section>
  );
 }

