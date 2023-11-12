import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Main from "./pages/main"
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/degreeworks_helper" element={<Login/>}> </Route>
        <Route path="/degreeworks_helper/login" element={<Login/>}></Route>
        <Route path="/degreeworks_helper/aboutUs" element={<AboutUs/>}></Route>
        <Route path="/degreeworks_helper/main" element={<Main saveState={false}/>}></Route>
        <Route path="/degreeworks_helper/saved" element={<Main saveState={true}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
