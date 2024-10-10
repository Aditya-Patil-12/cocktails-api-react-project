import React from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { setSearchText } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    // the search bar is higlighted ....
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchText(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="searchtext">
            Seach your Favourite Cocktail!!!!!!
          </label>
          <input
            type="text"
            id="searchtext"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
