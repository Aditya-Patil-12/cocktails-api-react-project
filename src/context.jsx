import React, { useContext, useEffect } from "react";
import { useState } from "react";
// created a context ......
const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

// Children Prop ....
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [allCocktails, setAllCocktails] = useState([]);
  useEffect(() => {
    const fetchCockTails = async () => {
      try {
        const resp = await fetch(url);
        if (resp.status == 404) throw new Error("Page Not Found asdf");
        const data = await resp.json();

        setCocktails(data.drinks);
        setAllCocktails(data.drinks);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCockTails();
  }, []);

  useEffect(() => {
    
    if (searchText.length == "" ) {
      setCocktails(allCocktails);
      return ;
    }
    // search Text changes we need to change the cocktails ........
    
    const filteredCocktails = allCocktails.filter((cocktail) => {
      let name = cocktail.strDrink;
      if (name.length < searchText.length) return false;
      return (
        name.slice(0, searchText.length).toUpperCase() == searchText.toUpperCase()
      );
    });
    setCocktails(filteredCocktails);
  }, [searchText]);

  return (
    <AppContext.Provider value={{ isLoading, cocktails, setSearchText }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook .....
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
