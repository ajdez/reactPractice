import React from "react";

class NumberGuessing extends React.Component{
   constructor(){
      super();
      this.state = {
         guesses : [],
         guessTries : 0,
         game: true,
         randomNumber: Math.floor(Math.random()*10)
      }
   }
   _handleButtonClick(event){
      event.preventDefault();

      this.setState({
         guessTries: this.state.guessTries + 1,
         guesses: this.state.guesses.concat([this.refs.bacon.value])
      })
   }
   render(){
      console.log(this.state.guesses)
      return(
         <div>
            <h2> Guess Number Between 1 and 100 </h2>
            <span> Your Guesses {this.state.guesses + ", "}</span>
            <br/>
            <span> Remaining Tries {5 - this.state.guessTries} </span>
            <form type="submit">
               <input type="text" ref="bacon"></input>
               {this.state.guessTries < 5
                  ? <button onClick = {this._handleButtonClick.bind(this)}>Guess!</button>
                  : null
               }
            </form>
         </div>
            )
   }
}

export default NumberGuessing;
