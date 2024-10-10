import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { productID } = useParams();
  const [ isProductLoading, setIsProductLoading ] = useState(false);
  const [cocktailInfo, setCocktailInfo] = useState({});

  const generateIngredients =(cocktailInfo)=>{
    let str = "strIngredient";
    let ans = "";

    for(let i=1;i<=13;i++){
      let tempNum =i.toString();
      tempNum=str+tempNum;
      if( cocktailInfo[tempNum] == null ) break;
      ans = ans+cocktailInfo[tempNum];
      ans = ans +",    ";
    }
    return ans.slice(0,-5);
  }

  useEffect(() => {
    const fetchCocktailInfo = async (finalUrl) => {
      try {
        const resp = await fetch(finalUrl);

        if (resp.status == 404) throw new Error("PAge Not Founddddddddd");

        const data = await resp.json();
        
        setCocktailInfo(data.drinks[0]);
        setIsProductLoading(false);

      } catch (error) {
        console.log(error);
      }
    };
    fetchCocktailInfo(url+productID);
  }, []);
  if (isProductLoading) return <Loading />;

  const { strDrinkThumb, strDrink } = cocktailInfo;
  
  return (
    <section className="section cocktail-section">
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} />

        <div className="drink-info">
          <div className="drink-container">
            <span className="drink-data">Name :</span>
            <p>{cocktailInfo.strDrink}</p>
          </div>
            <div className="drink-container">
            <span className="drink-data">Category :</span>
            <p>{cocktailInfo.strCategory}</p>
            </div>
            <div className="drink-container">
            <span className="drink-data">Info :</span>
            <p>{cocktailInfo.strAlcoholic}</p>
            </div>
            <div className="drink-container">
            <span className="drink-data">Glass :</span>
            <p>{cocktailInfo.strGlass}</p>
            </div>
            <div className="drink-container">
            <span className="drink-data">Ingredinets :</span>
            <p>{generateIngredients(cocktailInfo)}</p>
            </div>
            <div className="drink-container">
            <span className="drink-data">Instructions :</span>
            <p>{cocktailInfo.strInstructions}</p>
            </div>
            <div>

            </div>
        </div>
      </div>
        <Link to="/" className="btn btn-primary btn-norm" >Back Home</Link>
    </section>
  );
};

export default SingleCocktail;
