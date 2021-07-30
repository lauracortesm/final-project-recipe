import React, {Component} from 'react'
import Form from "./Form"
import Recipes from "./Recipes"
import "../TestApi.css"

const apiKey = "14a8d176a5c51e6c3d76ac22f20630b3"
const apiID = "719a90f4"

class TestApi extends Component {
  state = {
    recipes: []
  }
  
  getRecipe = async (e) => {
    const recipeName2 = e.target.elements.recipeName2.value;
    e.preventDefault();
    const apiCall = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName2}
    &app_id=${apiID}&app_key=${apiKey}`)
    const data = await apiCall.json();
    this.setState ({recipes: data.hits});
    //console.log(this.state.recipes)
  }
  
  componentDidMount = () => {
    const json = localStorage.getItem("recipes")
    const recipes = JSON.parse(json)
    this.setState({ recipes })
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem("recipes", recipes)
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
            <h1>are you hungry? <span className="App-heading-part-2">find somenthing to cook</span></h1>
            
            <Form getRecipe={this.getRecipe}/>
            
          </header>
          <body>
            <Recipes recipes={this.state.recipes}/>
          </body>

        </div>
      );
  }
}

export default TestApi;