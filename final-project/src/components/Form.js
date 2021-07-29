import React from 'react'
import './Form.css';

const Form = props => (
    <form onSubmit={props.getRecipe} className="Form-search">
        
        <input className="Form-Input" type="text" name="recipeName2" placeholder="Type an ingredient..."/>
        <button className="Form-Button">Find your Recipe!</button>
        
    </form>
    
);
export default Form;