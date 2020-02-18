import React, { useState, useEffect } from "react";
import axios from 'axios';




export default function SearchForm(props) {
 
//   const [char, setChar] = useState('');
//   const [query, setQuery] = useState([]);
  const [ results, setResults] = useState();

//   useEffect(() => {
//     axios.get(`https://rickandmortyapi.com/api/character/${query}`)
//       .then(response => {
//         const character = response.data.results.filter(char => {
//           return  char.name.toLowerCase() !== -1;
//       });
//        setQuery(character);
//     })  
//     .catch(error => console.log(error));
//    }, [query]);
  
const handleInputChange = (event) => {
    setResults(event.target.value);
    console.log(results);
}

const submitHandler = (event) => {
  event.preventDefault();
  const filtered = props.char.filter(chars => {
            return  chars.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
          });
      props.search([filtered])
      console.log(filtered);
     
     };


// const submitHandler = event => {
//     event.preventDefault();
//     const filtered = props.char.find(el => el.name.includes(results))
//     props.search([filtered]);
//     console.log(filtered)
// }

  return (
    <section className="search-form">
     {/* Add a search form here */}
     <h1>Search Form</h1>
       <form onSubmit={submitHandler}>
         {/* Enter character search field */}
         <label htmlFor='character'></label>
           <input
             type='text' 
             id='character'
             name='character'
             placeholder='Character' 
            // value={props.char} 
             onChange={handleInputChange} 
            />                
       <button type='submit'>Submit</button>
     </form>
   </section>
  );
 }

