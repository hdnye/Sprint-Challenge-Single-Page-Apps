import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from 'formik';


export default function SearchForm({ errors, touched, status }) {
 
  const [char, setChar] = useState([]);
  
  useEffect(() => {
    status && setChar(char => [...char, status])
     }, {status});

  return (
    <section className="search-form">
     {/* Add a search form here */}
    <hi1>Search Form</hi1>
    <Form>
      <Field type='text' name='name' placeholder='Name' />
        {touched.name && errors.name && ( 
          <p className='error'>{errors.name}</p>
        )}
     <button type='submit'>Submit</button>
    </Form>
   </section>
  );
}
