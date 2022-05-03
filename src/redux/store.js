import {counterReducer} from "./login/reducers"
import {legacy_createStore as createStore,combineReducers,applyMiddleware,compose } from "redux"
import { Todoreducer } from "./todo/reducers"

const middleware1=(store)=>(next)=>(action)=>{
    if(typeof(action)=='function')
    {
        return action(store.dispatch)
    }
    next(action)
}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware1),
  // other store enhancers if any
);
const rootRedducer=combineReducers({
    login:counterReducer,
    todo:Todoreducer
})
export const store =createStore(rootRedducer,enhancer)