import React from "react";
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedNode=({children})=>{
    let location=useLocation()
    let state=useSelector((state)=>state.login.data)
    // console.log(state.authState,"inprivatenod")
    // console.log(location,"inprivatenod")
   if(state.authState)
   {
       return children
   }
   else
   {
       return <Navigate to="/login" state={location.pathname} replace />
   }
}