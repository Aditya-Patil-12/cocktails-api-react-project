import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
const Home = () => {
  return (
    <div className="section">
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
