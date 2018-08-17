import React from "react";
import Form from "./Form";
import Recipelist from "./Recipelist";

import API_KEY_F2F  from '../../config_keys.js';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        };
    }

    // create an arrow funciton so you dont have to bind it
    getFunc = (e) => {
        e.preventDefault()
        console.log("got this function")
    }

    getFood = async (e) => {
        e.preventDefault()
        //grabs the recipe name from the user text input
        const recipeName = e.target.elements.recipeName.value;
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY_F2F}&q=${recipeName}&count=10`)
        const data = await api_call.json();
    
        this.setState({ 
            recipes: data.recipes
        });
        console.log(this.state.recipes);
    }
    
    render(){
        return(
            <div>
                <Form getFunc={this.getFunc} getFood={this.getFood} /> 
                
                {/* on the main compenent you must pass the state to the compoenent with this.state */}
                <Recipelist recipes={this.state.recipes} />

                {/* 
                <Form getFunc={this.getFunc} getFood={this.getFood} />
                { this.state.recipes.map(recipe => {
                    return (
                        <div key={recipe.recipe_id}>
                            <img src={recipe.image_url} alt={recipe.title}/>
                            <p>{recipe.title}</p>

                        </div>
                        )
                    }) 
                }
                */}
            </div>
        )
    }
}

export default App;