import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./Component/Acceuil";
import DetailUser from "./Component/DetailUser";
import ListTodo from "./Component/ListTodo";
import ListUser from "./Component/ListUser";

function App() {
  return (
    <div className="App">
      
      
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} >
            <Route  index element={<ListUser />} />
            <Route path='ListTodo/:id' element={<ListTodo />} />
            <Route path='DetailUser/:id' element={<DetailUser />} />
          </Route>
        </Routes>
    </BrowserRouter>
   

    </div>
  );
}

export default App;
