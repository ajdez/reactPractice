import React from "react";

class GuessThatNumber extends React.Component{
   _handleButtonClick(){
      var randomNumber = Math.floor(Math.random()*101);
      var userGuess = this.refs.userGuess.value;

      if(userGuess<randomNumber){
         alert("Too Low");
      }
      else if (userGuess === randomNumber){
         alert("YOU GOT IT");
      }
      else{
         alert("Too High");
      }
   }
   render(){
      return(
         <form className = "GuessThatNumber">
            <input type="text" ref="userGuess"/>
            <button type="submit" onClick={this._handleButtonClick.bind(this)}>Guess</button>
         </form>
      )
   }
}

export default GuessThatNumber;
