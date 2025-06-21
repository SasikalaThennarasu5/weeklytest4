// components/RecipeList.jsx
import React, { useState } from 'react';
import recipes from '../data/recipes';

function RecipeList() {
  const [search, setSearch] = useState('');

  // Filter logic: matches title or ingredients
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">📖 Recipe Book</h1>

      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search recipes by title or ingredient..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📦 Recipe Cards */}
      <div className="row">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <strong>Ingredients:</strong>
                  <ul className="mb-0">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeList;
