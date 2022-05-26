import React, { Fragment, useState, useEffect } from "react";
import '../styles/Episodes.css';
export const Episodes = (props) => {

    const [episode, setEpisode]= useState([]);

    useEffect(()=>{
        obtenerEpisode()
    },[]);
    console.log(episode);
    const obtenerEpisode = async()=>{
        const data = await fetch(`https://rickandmortyapi.com/api/episode/${props.id}`);
        const dataEpisode = await data.json();
        setEpisode(dataEpisode);
    }

    return (
        <Fragment>
            <div className="container-header">
                <h3>Episodes</h3>
                <div className="container-header_separador"></div>
            </div>
           
        </Fragment>
    )
};

export default Episodes;