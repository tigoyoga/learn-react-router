import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Contact() {
  const { id } = useParams();
  return (
    <div className='text-center'>
      <h1>Contact {id}</h1>
      <Link to='/contacts'>back</Link>
    </div>
  );
}
