import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom' //has a object ,that has in a property called filter

const Users = () => {
const[searchParams,setSearchParams]=useSearchParams()
const showActiveUsers=searchParams.get("filter")==="active"&&searchParams.get("serchh")==="nudd"
  return (
    <div>
        <h1>user1</h1> 
        <h1>user1</h1>
        <h1>user1</h1>
        <Outlet/>
        <button onClick={()=>setSearchParams({filter:"active" ,serchh:"nudd"})}>active users</button>
        <button onClick={()=>setSearchParams({})}>reset filter</button>

        
          {showActiveUsers? <h2>"showing active users"</h2>  : <h2>all users</h2>}
    </div>
  )
}

export default Users
