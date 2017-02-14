import React from "react";

class CharacterLimit extends React.Component{
   static propTypes = {
      limit: React.PropTypes.number.isRequired
   }
   constructor(){
      super();
      this.state = {
         currentInput : "",
         count: 0
      }
   }
   _handleInput(event){
      var count = event.target.value.length;
      this.setState({count: count});
      this.setState({currentInput: event.target.value})
   }
   render(){
      return (
         <div>
            {this.props.limit - this.state.count > 0
               ? <input type="text" onInput={this._handleInput.bind(this)} value={this.state.currentInput} />
               : <input type="text" value={this.state.currentInput} />
            }
            <div>{this.props.limit - this.state.count} remaining</div>
         </div>
      )
   }
}

export default CharacterLimit;
