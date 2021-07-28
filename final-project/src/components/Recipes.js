import {Link} from "react-router-dom"


const Recipes = props => (
    <div>
        {props.recipes.map((recipe)=>{
            return (
            <section key={recipe.id}>
                <img src={recipe.image_url} alt={recipe.title}/>
                <h2>{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0 , 25)}...`}</h2>
                <p>Publisher: <span>{recipe.publisher}</span></p>
                <button>
                    <Link to={{
                        pathname : `/recipe/${recipe.id}`, 
                        state: {recipe: recipe.title}}}>View Recipe</Link>
                </button>
            </section>
            
            );
        })}
    </div>
)

export default Recipes;
