import React from "react";
// import "./App.css";
// router .....
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

// import pages .....
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail"; 
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
