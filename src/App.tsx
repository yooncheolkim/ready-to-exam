import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
