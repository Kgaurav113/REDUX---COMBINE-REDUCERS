import React from "react"
import { useDispatch,useSelector } from "react-redux"
import {login,logout} from "../redux/login/action"
import { useNavigate,useLocation } from "react-router-dom"
export const Login=()=>{

    const data=useSelector((state)=>state.login.data)
    const dispatch=useDispatch()
    const location=useLocation();
    const navigate=useNavigate();
    let from=location.state||"/"
    console.log(data,"inlogin")
    console.log(data.authState,"inlogin")
    console.log(location,"inlogin")
    // const[logoutdata,setdata]=React.useState("")
    // const userdata=(e)=>{
    //     const myval=e.target.name;
    //     setdata({...mydata,[myval]:e.target.value})
    // }
    const submitdata=(e)=>{
        e.preventDefault()

        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(login({token:data.token,authState:true}))
            navigate(from,{replace:true})
        })
        .catch((e)=>console.log(e,"this isERR"))
        // dispatch(login(mydata))

    }
    const seelogout=()=>{
        dispatch(logout())
    }
    return(
        <div>
            <form onSubmit={submitdata}>
            <input placeholder="enter username" type="text" name="username" />
            <input placeholder="eneter the passwaord" type="password" name="password" />
            {!data.authState?<input type="submit"/>:""}
            </form>
            {data.authState?<button onClick={seelogout}>Logout</button>:""}

        </div>
    )
}