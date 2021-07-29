import React from 'react'
import './Form.css';

const Form = props => (
    <form onSubmit={props.getRecipe} className="Form-search">
        
        <input type="text" name="recipeName2" placeholder="Write an ingredient..."/>
        <button className="Form-Button">Find your Recipe!</button>
    </form>
);
export default Form;