import {Link} from "react-router-dom"
import "./Recipes.css"


const Recipes = props => (
    <main className = "Recipes-main-container">
        {props.recipes.map((recipe)=>{
            const getRecipeURL= recipe.recipe.shareAs
            const splitRecipeURL = getRecipeURL.split("/")
            const getRecipeID = splitRecipeURL[4]
            console.log(getRecipeID)
            return (
                <section className="Recipes-single-section" key={getRecipeID}>
                    <h2>{recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0 , 25)}...`}</h2>
                    <img className="Recipes-image"src={recipe.recipe.image} alt={recipe.recipe.label}/>
                    <h3 className="Recipes-heading-3"><span>made by </span>{recipe.recipe.source}</h3>
                    <button className="Recipes-view-button">
                        <Link to={{
                        pathname : `/recipe/${getRecipeID}`, 
                        state: {recipe: recipe.recipe.label}}}>View Recipe</Link>
                    </button>
                    
                </section>
            
            
            );
        })}
    </main>
)

export default Recipes;

/*
<section key={recipe.recipe.shareAs}>
                <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                <h2>{recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0 , 25)}...`}</h2>
                <p>Publisher: <span>{recipe.recipe.source}</span></p>
                <button>
                    <Link to={{
                        pathname : `/recipe/${recipe.recipe.shareAs}`, 
                        state: {recipe: recipe.recipe.label}}}>View Recipe</Link>
                </button>
            </section>

            */