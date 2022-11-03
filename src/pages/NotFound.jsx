import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <h1 className='text-5xl font-semibold'>404 Not Found</h1>
      <Link to={"/"}>back</Link>
    </div>
  );
}
