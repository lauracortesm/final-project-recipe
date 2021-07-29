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
        this.setState({activeRecipe: respond.hits[0]})
        console.log(this.state.activeRecipe.recipe.image)
    }
    
    render(){
        const recipe = this.state.activeRecipe
        console.log(recipe)

    
        return (
            <div>
                <image src={recipe.recipe} alt=" "/>
                        
                 <button>
                     <Link to="/">
                               Go Home
                    </Link>
                </button>
               

                
                
            </div>
        );
    }
}
export default SingleRecipe;


/*
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
*/