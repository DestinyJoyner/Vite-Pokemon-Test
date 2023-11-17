import { useState, useEffect } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./PokemonShow.css";

export default function PokemonShow() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  // fetch from local json file
  useEffect(() => {
    axios
      .get("/pokemonArray.json")
      .then(({ data }) => {
        // create recognizable variable as to avoid duo "id" variable names
        const pokeId = id;
        // find pokemon with corresponding id
        const thisPokemon = data.find(({ id }) => id === +pokeId);

        setPokemon(thisPokemon);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);

  return (
    pokemon.id && (
      <div className="pokemonShow">
        <h1>{pokemon.name}</h1>
        <section className="pokemonShow_card">
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="pokemonShow_card_details">
            <span>Type: {pokemon.type}</span>
            <span>Weight: {pokemon.weight}</span>
            </div>
        </section>

        {/* dummy links */}
        <div className="pokemonShow_links">
            <Link to="/pokemon">Back</Link>
            <Link to={`/pokemon/${id}/edit`}>Edit</Link>
            <Link to="">Delete</Link>
        </div>
      </div>
    )
  );
}
