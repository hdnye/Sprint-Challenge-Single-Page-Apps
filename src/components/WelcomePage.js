import React from "react";

export default function WelcomePage(props) {
  const routeToCharacters = e => {
    e.preventDefault();
    props.history.push('/character-list');
  };
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /><br />
        <button onClick={routeToCharacters}>Character Cards</button>
      </header>
    </section>
  );
}
