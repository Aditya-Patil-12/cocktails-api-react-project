import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const DisplayCocktail = (
  { idDrink, strDrink, strDrinkThumb }) => {
  return (
    <div className="cocktail">
      <div className="cocktail-img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
        <h4>{strDrink}</h4>
        <h5>Cocktail</h5>
        <Link to={"/products/" + idDrink} className="btn btn-primary">
          Details
        </Link>
        {/* <Link></Link> */}
      </div>
    </div>
  );
};
const CocktailList = () => {
  const { cocktails, isLoading } = useGlobalContext();
  if (isLoading) return <Loading />;

  if (cocktails.length == 0)
    return (
      <div className="section-title">
        <h2>No Cocktails Exists For Search Criteria</h2>
      </div>
    );
  return (
    <>
      <section className="section">
        <div className="cocktails-center">
          {cocktails.map((cocktail,index) => {
            return  (
            <DisplayCocktail {...cocktail}  key={index}/>)
          })}
        </div>
      </section>
    </>
  );
};
export default CocktailList;
