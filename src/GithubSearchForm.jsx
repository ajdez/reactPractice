import React from 'react';

class GithubSearchForm extends React.Component{
   static PropTypes ={
      onSearch: React.PropTypes.func
   }
   _handleSubmit(event){
      event.preventDefault();
      this.props.onSearch(this.refs.userInput.value);
   }
   render(){
      return(
         <form onSubmit = {this._handleSubmit.bind(this)}>
            <p>Enter a GitHub username:</p>
            <input type="text" ref= "userInput"/>
            <button>Go!</button>
         </form>
      )
   }
}

export default GithubSearchForm;
