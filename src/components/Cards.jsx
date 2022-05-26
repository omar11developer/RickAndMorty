import React, { Fragment, useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import "../styles/Cards.css";
export const Cards = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const character = await data.json();
    setDatos(character.results);
  };

  return (
    <Fragment>
      
        {datos.map((item) => (
          <div className="cards" key={item.id}>
            <Link to={`/character/${item.id}`}>
              <div className="cards-img">
                <img className="img-fluid" src={item.image} alt={item.name} />
              </div>
              <div className="cards-body">
                <h4>{item.name}</h4>
                <p>{item.species}</p>
              </div>
          </Link>
            </div>
        ))}
     
    </Fragment>
  );
};

export default Cards;
