
import './App.css';
import {Login} from "./components/login"
import{Home} from "./components/home"
import {Products} from "./components/products"
import{Routes,Route} from "react-router-dom"
import {Navigator} from "./navigator/Navigator"
import{Todo} from "./components/todo"
import{ProtectedNode} from "./protected/Protected"
function App() {
  return (
    <>
        <Navigator/>
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedNode><Home/></ProtectedNode>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/todo" element={<ProtectedNode><Todo/></ProtectedNode>}></Route>
      </Routes>
    </div>
    </>

  );
}

export default App;
