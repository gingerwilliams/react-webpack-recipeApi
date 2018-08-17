import React from "react";

class Recipelist extends React.Component{
    render(){
        return(
            <div>
                
                { this.props.recipes.map(recipe => {
                    return (
                        <div className="row" key={recipe.recipe_id}>
                            <div className="col-md-4">
                                <img src={recipe.image_url} alt={recipe.title}/>
                                <h5>{recipe.title}</h5>
                                <p>by: <span>{recipe.publisher}</span></p>

                                <a href={recipe.source_url} target="_blank">open recipe</a>

                            </div>
                        </div>
                        )
                    }) 
                }
                
            </div>
        );
    }
}

export default Recipelist;