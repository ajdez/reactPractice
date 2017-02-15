import React from 'react';
import GithubSearchForm from "./GithubSearchForm";
import GithubProfile from "./GithubProfile";

class GithubSearch extends React.Component{
   constructor() {
    super();
    this.state = {};
  }
  _handleSearch(searchTerm){
     this.setState({
        user: searchTerm
     })
 }
   render(){
      return(
         <div>
            <GithubSearchForm onSearch={this._handleSearch.bind(this)}/>
            {this.state.user ? <GithubProfile username={this.state.user}/> : null}
         </div>
      )
   }
}

export default GithubSearch;
