import {Link} from "react-router-dom"
import React from "react"
 

const apiKey = "a5c4732f-dafe-408e-84f7-e956dddc5b26"

class SingleRecipe extends React.Component{
    state = {
        activeRecipe: []
    }
    
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        //const title = this.props.match.params.id;
        //const request = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes?search=${title}=${apiKey}`)
        const request = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes?search=${title}=
        ${apiKey}`)
        const respond = await request.json()
        this.setState({ activeRecipe : respond.data.recipes[0]})
        console.log(this.state.activeRecipe)
    }
    
    render(){
        const recipe = this.state.activeRecipe
        return (
            <div>
                { this.state.activeRecipe.lenght !== 0 &&
                    <div>
                        <img src={recipe.image_url} alt={recipe.title}/>
                        <h2>{recipe.title}</h2>
                        <h3>{recipe.publisher}</h3>
                        <button>
                            <Link to="/">
                                Go Home
                            </Link>
                        </button>
                    </div>

                }
                
            </div>
        );
    }
}
export default SingleRecipe;