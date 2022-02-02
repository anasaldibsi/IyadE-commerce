import "./App.css";
import {Form,Button} from 'react-bootstrap'
import Header from "./Components/Common/Header/";
import TopHeader from "./Components/Common/Header/TopHeader";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Common/Login/";
import Register from "./Components/Common/Register/";
import Home from './Components/Main/Home/'
import Shop from './Components/Main/Shop/index'
function App() {
  return (
    <div className="App">
     <TopHeader/>

      <Header/>
      
     <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/" element={<Home/>} />


      </Routes>
    </div>
  );
}

export default App;
