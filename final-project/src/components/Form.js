import React from 'react'
import './Form.css';

const Form = props => (
    <form onSubmit={props.getRecipe} className="Form-button">
        <input type="text" name="recipeName"/>
        <button>Find your Recipe!</button>
    </form>
);
export default Form;