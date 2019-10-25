import React from 'react';
const Recipe = ({ title, image, ingredients, url, source, labels }) => {
  let veggie = '';

  const updateVeggie = labels => {
    veggie = labels.filter(label => label === 'Vegetarian');
  };

  updateVeggie(labels);

  return (
    <div className="recipe">
      <div className="recipe-item-wrapper">
        <div className="recipe-item-container">
          <img className={`image+${title}`} src={image} alt=""></img>
          <div className="recipe-item-content">
            <h3 className={title}>{title}</h3>
            <span className="recipe-source">{source}</span>
            <ol className={`ingredients+${title}`}>
              <p>
                <b>Ingredients:</b>
              </p>
              {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
            <div className="badge">{veggie}</div>
            <a href={url} className="recipeLink" target="_blank" rel="noopener noreferrer">
              Go to Recipe
            </a>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
