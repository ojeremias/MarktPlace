import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/category">Categorias</Link>
        </nav>
    </div>
  )
}

