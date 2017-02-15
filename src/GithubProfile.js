import React from "react";

class GithubProfile extends React.Component{
   static propTypes={
      username : React.PropTypes.string.isRequired
   }
   constructor(){
      super();
      this.state = {}
   }
   componentDidMount(){
      var url = `https://api.github.com/users/${this.props.username}`;
      fetch(url)
      .then(response=>response.json())
      .then(function(result){
         this.setState({
            user: result
         })
      })
   }
   render(){
      return(
         <div class="github-user">
            <img class="github-user__avatar" src="URL OF THE AVATAR"/>
            <div class="github-user__info">
               <p>{this.state.user.login} ({this.state.user.name})</p>
               <p>{this.state.user.bio}</p>
            </div>
         </div>
      )
   }
}

export default GithubProfile;
