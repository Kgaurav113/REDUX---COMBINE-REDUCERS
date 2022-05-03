import { Login,Logout } from "./actiontypes";
import {loaddata,savedata} from "../../utlities/localstorage"

const initialstate={
    data: loaddata("login")||{authState:false}
}

export const counterReducer=(state=initialstate,action)=>{
    console.log(state,"in reducer")
    switch(action.type)
    {
        case Login:{
            let updatedData=action.payload
            console.log(updatedData,"checking")
            savedata("login",updatedData)
            return{
                ...state,
                data:updatedData
            }
        }
        case Logout:{
            let curr={authState:false}
            console.log(curr,"logout me hoon")
            savedata("login",curr)
            return{
                data:curr
            }
        }

        default:{
            return state
        }
    }
}