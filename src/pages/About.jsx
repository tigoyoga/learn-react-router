import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-semibold text-center'>About</h1>
      <Link to='/'>back</Link>
    </div>
  );
}
