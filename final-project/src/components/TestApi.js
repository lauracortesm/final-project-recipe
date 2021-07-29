import React, {Component} from 'react'
import Form from "./Form"
import Recipes from "./Recipes"
import "../App.css"

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
  

  render(){
    return (
        <div className="App">
          <header className="App-header">
            <h1>Recipe Search</h1>
            
            <Form getRecipe={this.getRecipe}/>
            
          </header>
          <Recipes recipes={this.state.recipes}/>
          
        </div>
       /* <div className="App">
          <header className="App-header">
            <h1>Recipe Search</h1>
            <Form getRecipe={this.getRecipe}/>
          </header>
          <Recipes recipes={this.state.recipes}/>
          
          
        </div>*/
      );
  }
}

export default TestApi;