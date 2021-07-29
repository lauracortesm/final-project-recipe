/*import React, {Component} from 'react'
import Form from "./components/Form"
import Recipes from "./components/Recipes"
import './App.css'
const apiKey = "14a8d176a5c51e6c3d76ac22f20630b3"
const apiID = "719a90f4"

class App extends Component {
  state = {
    recipes: []
  }
  
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const apiCall = await fetch (`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeName}=
    ${apiKey}`);
    //const apiCall = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}
    //&app_id=${apiID}&app_key=${apiKey}`);
    
    const data = await apiCall.json();
    this.setState ({recipes: data.data.recipes});
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
          <h1>Recipe Search</h1>
          <Form getRecipe={this.getRecipe}/>
        </header>
        <Recipes recipes={this.state.recipes}/>
        
      </div>
    );
  }
}

export default App;*/
