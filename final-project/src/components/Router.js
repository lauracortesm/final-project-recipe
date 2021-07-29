import { render } from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "../App"
import TestApi from "./TestApi"
import SingleRecipe from "./SingleRecipe"

const Router = () => (
    
    <BrowserRouter>
        <Switch>
            <Route path="/" component = {TestApi} exact/>
            <Route path="/recipe/:id" component = {SingleRecipe}/>
        </Switch>

    </BrowserRouter>
)

export default Router; 