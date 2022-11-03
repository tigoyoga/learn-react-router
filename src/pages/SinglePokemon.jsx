import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function SinglePokemon() {
  const { name } = useParams();
  const location = useLocation();
  const url = location.state.url;
  const [id, setID] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setID(data.id);
      });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <img
        className='w-96'
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={`pokemon ${name}`}
      />
      <h1>{name}</h1>
      <Link to={"/pokemons"}>back</Link>
    </div>
  );
}
