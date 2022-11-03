import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className='w-1/3 h-10 p-8 mx-auto flex justify-between items-center'>
        <NavLink
          end
          to={"/"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to={"/pokemons"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Pokemons
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          About
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
