import React from "react"
import { Link } from "gatsby"

export const Links = () => {
    return (
        <span>
           <Link replace to="/" >Home</Link>  | <Link replace to="/about" >about</Link>  | <Link replace to="/typegen" >Typegen</Link> |  <Link replace to="/example" >Example</Link> | <Link replace to="/admin/dashboard">Dashboard</Link> | <Link replace to="/admin">Settings</Link>
        </span>
    )
}