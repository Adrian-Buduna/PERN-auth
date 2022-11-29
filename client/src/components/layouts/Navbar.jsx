import React from "react";
import {
  Link
} from "react-router-dom";


const Nav = () => {
  return (
    <div className="flex ">
      <ul className="flex gap-8 text-gray-100 uppercase font-bold text-2xl">
        <Link to="/"><li>Home</li></Link>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/logout"><li>Logout</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/register"><li>Register</li></Link>
      </ul>
    </div>
  )
}

export const Navbar = React.memo(Nav)