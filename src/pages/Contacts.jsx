import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-semibold text-center'>Contacts</h1>
      <div className='flex gap-2 text-center justify-center'>
        <Link to='/contacts/1'>Contact 1</Link>
        <Link to='/contacts/2'>Contact 2</Link>
      </div>
      <Link to='/'>back</Link>
    </div>
  );
}
