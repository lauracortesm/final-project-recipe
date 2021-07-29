import './SingleRecipe.css';
import {Link} from "react-router-dom"
import React from "react"
 
const apiKey = "14a8d176a5c51e6c3d76ac22f20630b3"
const apiID = "719a90f4"

class SingleRecipe extends React.Component{
    state = {
        activeRecipe: []
    }
    
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const request = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${title}
        &app_id=${apiID}&app_key=${apiKey}`)
        const respond = await request.json()
        console.log(respond)
        this.setState({activeRecipe: respond.hits[0].recipe})
        console.log((this.state.activeRecipe))
    }
    
    render(){
        const recipe = this.state.activeRecipe
        
        console.log(recipe.ingredientsLines)
        return (  
           
            <div>
                <header className="SingleRecipe-header">
                <h1>yummyy!! <span className="SimpleRecipe-heading-part-2">it looks so tasty...</span></h1>
                        <button className="SimpleRecipe-view-button">
                            <Link to="/">go home</Link>
                        </button>
                </header>
                <body>
                    <main className="SimpleRecipe-single-section">
                        
                        <h2>{recipe.label}</h2>
                        <img src={recipe.image} alt={recipe.label}/>
                        <h3 className ="SimpleRecipe-heading-3">delicious recipe from: {recipe.source}</h3>
                        <p>Preparation Time: {recipe.totalTime}</p>
                        <button className="SimpleRecipe-view-button"><a href={recipe.url} target="_blank">view full recipe</a></button>

                    </main>
                    
                    
                </body>
                
            </div>

            
        )
    }
}
export default SingleRecipe;