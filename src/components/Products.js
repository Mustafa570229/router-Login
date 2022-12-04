import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Products = () => {
  return (
    <div>
      <input type="text" placeholder='search'/>
      <nav>
        <Link to="new"> new</Link>
        <Link to="featured"> Featured</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Products
