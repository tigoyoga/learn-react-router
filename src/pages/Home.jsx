import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-semibold text-center'>Home</h1>
      <div className=' flex gap-8 justify-center'>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}
