import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector,useDispatch } from 'react-redux'
import{todooperation} from "../redux/todo/action"
export const Todoinput = () => {
    const [inputdata,setinput]=React.useState()
    const dispatch=useDispatch()
    const sendInput=()=>{
        fetch("http://localhost:3004/todo/",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                id:uuidv4(),
                title:inputdata
            }) 
        })
        .then((res)=>res.json())
        .then((data)=>dispatch(todooperation(data)))
    }
  return (
    <div>
        <input placeholder='enter the task' type="text" onChange={(e)=>setinput(e.target.value)} />
        <button onClick={sendInput}>addtodo</button>
    </div>
  )
}
