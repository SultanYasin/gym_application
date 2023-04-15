import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Diet.css";

const API_KEY = "50878a26169149f1885cd5f0d364d5f6";

function Diet() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
      );
      setRecipes(response.data.recipes);
    };

    fetchRecipes();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=10&apiKey=${API_KEY}`
    );

    const searchResults = response.data.results;
    const recipeDetailsPromises = searchResults.map((result) =>
      axios.get(
        `https://api.spoonacular.com/recipes/${result.id}/information?apiKey=${API_KEY}`
      )
    );
    const recipeDetailsResponses = await Promise.all(recipeDetailsPromises);
    const recipeDetails = recipeDetailsResponses.map(
      (response) => response.data
    );

    setRecipes(recipeDetails);
  };

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="container">      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
              <h2>{recipe.title}</h2>
              <p>{stripHtml(recipe.summary)}</p>
              <a href={recipe.sourceUrl}>See Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diet;
