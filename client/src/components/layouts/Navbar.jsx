import React from "react";
import {
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {

  const { isAuth } = useSelector(state => state.auth)
  return (
    <nav className="flex ">
      <ul className="flex gap-8 text-gray-100 uppercase font-bold text-3xl">
        {
          isAuth ?
            <>
              <Link to="/"><li>Home</li></Link>
              <Link to="/dashboard"><li>Dashboard</li></Link>
            </>
            :
            <>
              <Link to="/login"><li>Login</li></Link>
              <Link to="/register"><li>Register</li></Link>
            </>
        }
      </ul>
    </nav>
  )
}

export const Navbar = React.memo(Nav)