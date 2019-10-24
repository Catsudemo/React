import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe.js';

function App() {
  const APP_ID = '98540f71';
  const APP_KEY = '913289e5d3027b15cfd18b842c084b57';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('apple');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
    setSearch('');
  };

  const searchSubmit = e => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
  };

  return (
    <div className="App">
      <header className="header-container">
        <img
          className="header-image"
          src="https://i.ibb.co/FB8DZ2z/recipe-header.jpg"
          alt="pattern"
        ></img>
        <div className="overlay-div">
          <span className="header-header">Recipe Search</span>
          <span className="header-text">Find recipes you love.</span>
          <div className="centered-search">
            <form className="search-form" onSubmit={searchSubmit}>
              <input className="search-bar" type="text" value={search} onChange={updateSearch} />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="recipeBox" key="recipeBox">
        <div className="grid-row" key="grid-row">
          {recipes.map((recipe, i) => (
            <Recipe
              key={`${recipe.recipe.label}${i}+key`}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
              source={recipe.recipe.source}
              labels={recipe.recipe.healthLabels}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
