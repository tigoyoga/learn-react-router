import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Pokemons from "./pages/Pokemons";
import SinglePokemon from "./pages/SinglePokemon";

export default function App() {
  return (
    <>
      <BrowserRouter className=''>
        {/* Nested Route because we use Shared Layout */}
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='pokemons' element={<Pokemons />} />
            <Route path='pokemons/:name' element={<SinglePokemon />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
