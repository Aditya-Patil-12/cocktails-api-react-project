import React from "react";
// import "./App.css";
// router .....
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

// import pages .....
import About from "./pages/about";
import Home from "./pages/home";
import SingleCocktail from "./pages/SingleCocktail"; 
import Error from "./pages/error";
// import components ....
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products/:productID" element={<SingleCocktail />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
