import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-semibold text-center'>Contact</h1>
      <Link to='/'>back</Link>
    </div>
  );
}
