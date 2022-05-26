import React, { Fragment } from "react";
import Cards from "../components/Cards";
import '../styles/SectionCards.css'

export const SectionCards = () => {
    return (
       <Fragment>
            <div className="SectionTitle">
            <h2 className="pt-5">Character</h2>
            </div>
           <div className="cards-container">
                <Cards />
           </div>
           <div className="cards-button">
           <button className="btn btn-outline-success mb-5">See More</button>
           </div>
           
       </Fragment>
    )
};

export default SectionCards;

