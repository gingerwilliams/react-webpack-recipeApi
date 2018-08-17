import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getFunc} style={{margin: "2rem"}}>
                    <input type="text" />
                    <button>test</button>
                </form>

                <form onSubmit={this.props.getFood} style={{margin: "2rem"}}>
                    <input type="text" name="recipeName" />
                    <button>search</button>
                </form>
                
            </div>
        );
    }
}

export default Form;