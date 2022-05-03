import {TodoLoad,TodoSucess,TodoErr} from "./actiontypes"

const initState={
    todo:{
        isLoading:false,
        isError:false,
        data:[]
    }
}

export const Todoreducer=(state=initState,action)=>
{
    console.log(action.payload,"todoreducer")
    switch(action.type)
    {
        case TodoLoad:{
            return{
                ...state,
                isLoading:true,
                isError:false,
                data:[]
            }
        }

        case TodoSucess:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:action.payload
            }
        }
        case TodoErr:{
            return{
                ...state,
                isLoading:false,
                isError:true,
                data:[]
            }
        }
        default:{
            return {...state}
        }
    }
}