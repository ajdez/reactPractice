import React from "react";

class YouClicked extends React.Component{
   constructor(){
      super();
      this.state =   {
         timesClicked : 0,
         timesReset : 0,
         showReset: false
      };
   }
   _handleButtonClick(){
      this.setState({
         timesClicked : this.state.timesClicked + 1
      })
   }
   _resetButtonClick(){
      this.setState({
         timesClicked: 0,
         timesReset : this.state.timesReset + 1,
         showReset: true
      })
   }
   render(){
      return(
         <div>
            <button onClick={this._handleButtonClick.bind(this)}>Click</button>
            <button onClick={this._resetButtonClick.bind(this)}>Reset</button>
            <div>you clicked {this.state.timesClicked} times</div>
            {this.state.showReset ? <div> you reset {this.state.timesReset} times </div> : null}
         </div>

      )
   }
}

export default YouClicked;
