import React from "react";

class NumberGuessing extends React.Component{
   constructor(){
      super();
      this.state = {
         guesses : [],
         guessTries : 0,
         game: true,
         randomNumber: Math.floor(Math.random()*101)
      }
   }
   _handleButtonClick(event){
      event.preventDefault();

      this.setState({
         guessTries: this.state.guessTries + 1,
         guesses: this.state.guesses.concat([this.refs.bacon.value])
      });
      if(this.refs.bacon.value == this.state.randomNumber){
         this.setState({
            game: false,
            message: "you won!"
         })
      }
      else if (this.refs.bacon.value < this.state.randomNumber){
         this.setState({
            message: "too low kido"
         })
      }
      else if (this.refs.bacon.value > this.state.randomNumber){
         this.setState({
            message: "too High!!"
         })
      }
   }
   _restartGame = () => {
      this.setState({
         game:true,
         message:"",
         guessTries: 0,
         guesses:[],
         randomNumber: Math.floor(Math.random()*101)
      })
   }
   render(){
      console.log(this.state.guesses)
      return(
         <div>

            {this.state.game
               ? <div>
                  <h2> Guess Number Between 1 and 100 </h2>
                  <p> {this.state.message} </p>
                  <span> Your Guesses {this.state.guesses + ", "}</span>
                  <br/>
                  <span> Remaining Tries {5 - this.state.guessTries} </span>
                  <form type="submit">
                     <input type="text" ref="bacon"></input>
                     {this.state.guessTries < 5
                        ? <button onClick = {this._handleButtonClick.bind(this)}>Guess!</button>
                        : <div><h2> Out of guesses kid .... you lose. The number was --{this.state.randomNumber}--</h2>{this.renderRestartButton()}</div>
                     }
                  </form>
               </div>
               : <div><h2>{this.state.message}</h2> {this.renderRestartButton()}</div>
            }
         </div>
      )
   }
   renderRestartButton(){
      return <button onClick={this._restartGame}>restart</button>
   }
}

export default NumberGuessing;
