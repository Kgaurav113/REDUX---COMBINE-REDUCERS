import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Nav =styled.div`
display:flex;
gap:20px;
background:black;
color:white;
text-decoration:none;

`
export const Navigator=()=>{
    return(
        <Nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/todo"}>Todo</Link>
        </Nav>
    )
}