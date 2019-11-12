import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';


export default function SearchForm({ errors, touched, value }) {
 
  const [char, setChar] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`https://ickandmortyapi.com/api/character/`)
      .then(response => {
        const character = response.data.results.filter(char = char.name.toLowerCase().includes(query.toLowerCase()));
        setChar(character);
      });
    }, [query]);

const handleInputChange = (event) => {
    setQuery(event.target.value);
}

  return (
    <section className="search-form">
     {/* Add a search form here */}
    <h1>Search Form</h1>
    <Form>
      {/* Enter character search field */}
      <Field 
        type='text' 
        name='name'
        placeholder='Name' 
        value={query} onChange={handleInputChange} />
        {touched.name && errors.name && ( 
          <p className='error'>{errors.name}</p>
        )}
     <button type='submit'>Submit</button>
    </Form>
   </section>
  );
}
