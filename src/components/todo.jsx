import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{todooperation} from "../redux/todo/action"
import{Todoinput} from "./todoinput"
import { Todoitem } from './todoitem'
export const Todo = () => {

    const {data,isLoading,isError}=useSelector((state)=>state.todo)
    const dispatch=useDispatch()
    console.log(data,"intodo")
    React.useEffect(()=>{
        dispatch(todooperation())
    },[])

    if(isLoading)
    {
        console.log("yes a litie")
        return<h1>...Loading</h1>
    }
    if(isError)
    {
        return<h1>...something went wrong</h1>
    }
    if(data!=undefined)
    {
        return (
            <div>
                <h1>Todo Lists</h1>
                <Todoinput/>
        
                {
                    data.map((ele)=>{
                        return <Todoitem key={ele.id} {...ele}/>
                    })
                }
            </div>
          )
    }

}
