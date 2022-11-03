import React from "react";
import { Link } from "react-router-dom";

export default function Pokemons() {
  const [dataPoke, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);

        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-24 w-1/2 mx-auto'>
        {dataPoke?.map((poke, index) => (
          <Link
            to={`/pokemons/${poke.name}`}
            state={{ url: poke.url }}
            className='w-full'
          >
            <div
              key={index}
              className='w-full h-auto bg-blue-400 text-xl text-center p-2 border hover:bg-blue-600 cursor-pointer'
            >
              {poke.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export function Loading() {
  return (
    <div className='bg-slate-900 opacity-20 h-screen w-screen flex items-center justify-center'>
      <h1 className='text-5xl '>Loading...</h1>
    </div>
  );
}
