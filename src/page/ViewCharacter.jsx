import React, {useState, useEffect, Fragment} from "react";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import Episodes from "../components/Episodes";
import '../styles/ViewCharacter.css'

export const ViewCharacter = () => {
    const [character, setCharacter]=useState([]);
    const [origin, setOrigin]=useState([]);
    const [episode, setEpisode]=useState([]);
    const [episodios, setEpisodios] = useState([])

    const [modalEpisode, setModalEpisode] = useState([])
    const {id} = useParams();
    let contador = 1;
    useEffect(() => {
        getCharacter()
        
    }, []);

    //console.log(episode);
    const getCharacter = async()=>{
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const user = await data.json();
        setCharacter(user)
        setOrigin(user.origin)
        setEpisode(user.episode)
        setEpisode(user.episode)
    }

    const getEpisodios = async(url)=>{
        const data = await fetch(`${url}`)
        const episodes = await data.json()
        setModalEpisode(episodes);
        
    }
    
    const handlerClick =(item)=>{
        getEpisodios(item)
        console.log(modalEpisode.characters);
    }
    
    
    return (
        <Fragment>
            
            
                
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Episode</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Name: <span>{modalEpisode.name}</span></p>
                    <p>Air date: <span>{modalEpisode.air_date}</span></p>
                    <p>Episode: <span>{modalEpisode.episode}</span></p>
                   
                </div>
                
                </div>
            </div>
            </div>

            


            <div className="container">
            <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="container-img">
                            <img src={character.image} 
                            alt={character.name}
                            className='imagen-fluid'
                            />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="container-info">
                            <h3 className="mb-4">{character.name}</h3>
                            <p>Specie: <span>{character.species}</span></p>
                            <p>Gender: <span>{character.gender}</span></p>
                            <p>Status: <span>{character.status}</span></p>
                            <p>Origin: <span>{origin.name}</span></p>
                            <p>Episode: <span>{episode.length}</span></p>
                        </div>
                    </div>
                </div>
                <div className="container-header">
                <h3>Episodes</h3>
                <div className="container-header_separador"></div>
                <div className="container-episodes">
                    <ul>
                        {
                            episode.map(item =>(
                                <div onClick={()=>handlerClick(item)} data-bs-toggle="modal" data-bs-target="#exampleModal"  className="container-episodes_cards">
                                    <li >Episode {contador++} </li>
                                </div>
                                
                            ))
                        }
                    </ul>
                </div>
            </div>
            </div>

        </Fragment>
    )
};

export default ViewCharacter;
