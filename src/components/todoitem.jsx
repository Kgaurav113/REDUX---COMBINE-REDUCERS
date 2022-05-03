import React from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import{todooperation} from "../redux/todo/action"
export const Todoitem = ({title,id}) => {
const dispatch=useDispatch()
    const deletetask=(id)=>{
        fetch(`http://localhost:3004/todo/${id}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then((res)=>res.json())
        .then((data)=>dispatch(todooperation()))
    }
  return (
      <>
      <h1>{title}</h1>
      <button onClick={()=>deletetask(id)}>done</button>
      </>

  )
}
