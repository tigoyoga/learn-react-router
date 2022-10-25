import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ContactLayout() {
  return (
    <>
      <Link to='/contacts/1'>Contact 1</Link>
      <br />
      <Link to='/contacts/2'>Contact 2</Link>
      <br />
      <Link to='/contacts/new'>New Contact</Link>
      <Outlet />
    </>
  );
}
