import React from "react";

class CharacterCounter extends React.Component{
   constructor(){
      super();
      this.state = {
         currentInput : "",
         count: 0
      }
   }
   _handleInput(event){
      var count = event.target.value.length;
      this.setState({count: count})
   }
   render(){
      return(
         <div>
            <input type="text" onInput={this._handleInput.bind(this)} />
            <div>{this.state.count} </div>
         </div>
      )
   }
}

export default CharacterCounter;
