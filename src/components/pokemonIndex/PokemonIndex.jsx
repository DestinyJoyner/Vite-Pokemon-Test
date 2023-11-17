import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import "./PokemonIndex.css"

const API = import.meta.env.VITE_API_URL

function PokemonIndex(props) {

    const [allPokemon, setAllPokemon] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        axios.get(`${API}/pokemon`)
        .then(({data}) => setAllPokemon(data))
        .catch(err => {
            console.log(err)
            navigate("/error")
        })
    },[])


    return (
        <div className='pokemonIndex'>
            <h1>All pokemon</h1>
            <section className='pokemonIndex_list'>
                {
                    allPokemon.map(({image, name, id})=>
                    <Link to={`/pokemon/${id}`}
                    className='pokemonIndex_card'>
                        <img src={image} alt={name} />
                        <span>{name}</span>
                    </Link>)
                }
            </section>
        </div>
    );
}

export default PokemonIndex;