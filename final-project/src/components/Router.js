
import { BrowserRouter, Switch, Route } from "react-router-dom"
import TestApi from "./TestApi"
import SingleRecipe from "../components/SingleRecipe/SingleRecipe"

const Router = () => (
    
    <BrowserRouter>
        <Switch>
            <Route path="/" component = {TestApi} exact/>
            <Route path="/recipe/:id" component = {SingleRecipe}/>
        </Switch>

    </BrowserRouter>
)

export default Router; 