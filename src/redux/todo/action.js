import {TodoLoad,TodoSucess,TodoErr} from "./actiontypes"


 export const todoload=()=>{
    return{
        type:TodoLoad
    }
}

export const todosucess=(payload)=>{
    return{
        type:TodoSucess,
        payload
    }
}

 export const todoerr=(payload)=>{
    return{
        type:TodoErr
    }
}

export const todooperation=()=>(dispatch)=>{
    dispatch(todoload())
    fetch("http://localhost:3004/todo")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data,"intodoaction")
        dispatch(todosucess(data))})
    .catch((err)=>dispatch(todoerr()))
}