import React, { useMemo } from "react";
import queryString from 'query-string';
import PropTypes from "prop-types";
import { heroes } from "../../data/heroes";
import HeroCard from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router";
import { getHeroesByName } from "../selectores/getHeroesByName";

const SearchScreen = ({history}) => {

  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);


  const [formValues, handleInputChange] = useForm({
    findElement: q
  });

  const {findElement} = formValues;

  const heroesFilter =   useMemo(() => getHeroesByName(q), [q]);


  const handleSearch = (e) => {
    e.preventDefault();

    console.log(findElement);
    history.push(`?q=${findElement}`);
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input 
            type="text" 
            name="findElement" 
            placeholder="Find your hero" 
            className="form-control"
            value={findElement}
            onChange={handleInputChange} />
            <button type="submit" className="btn m-1  btn-block btn-outline-primary">
              Search..
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            heroesFilter.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

SearchScreen.propTypes = {
  history: PropTypes.object.isRequired
};

export default SearchScreen;
