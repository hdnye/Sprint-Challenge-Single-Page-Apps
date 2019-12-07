import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";



export default function SearchForm(props) {
 
  const [char, setChar] = useState([]);
  const [query, setQuery] = useState({
    name:''
  });

  // useEffect(() => {
  //   axios.get(`https://rickandmortyapi.com/api/character/`)
  //     .then(response => {
  //       const character = response.data.results.filter(char => {
  //         return  char.name.toLowerCase().includes(query.toLowerCase()) !== -1;
  //       });
  //      setChar(character);
  //  }, [query]);

const handleInputChange = (event) => {
    setQuery({...query, name: event.target.value });
}

const submitHandler = (event) => {
  event.preventDefault();
  const character = props.data.results.filter(char => {
            return  char.name.toLowerCase().includes(query.toLowerCase()) !== -1;
          });
         props.setChar(character);
         console.log(character);
     };

  return (
    <section className="search-form">
     {/* Add a search form here */}
     <h1>Search Form</h1>
       <form onSubmit={submitHandler}>
         {/* Enter character search field */}
           <input
             type='text' 
             id='name'
             name='name'
             placeholder='Name' 
             value={query.name} 
             onChange={handleInputChange} 
            />                
       <button type='submit'>Submit</button>
     </form>
   </section>
  );
 }

