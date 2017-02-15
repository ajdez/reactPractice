import React from "react";

class GithubProfile extends React.Component{
   static propTypes={
      user : React.PropTypes.string.isRequired
   }
   constructor(props){
      super(props);
      this.state = {}
      console.log("IIIIIIIIIIII", this.props.username)
   }
   fetchData(){
      var that = this;

      var url = `https://api.github.com/users/${this.props.username}`
      fetch(url)
      .then(response => response.json())
      .then(function(result){
         that.setState({
            user: result
         })
      })
   }
   componentDidMount(){
      this.fetchData();
   }
   componentDidUpdate(prevProps, prevState){
      if (prevProps.username !== this.props.username){
         this.fetchData();
      }
   }
   render(){
      return(
         <div>
            {!this.state.username
               ?<div> Loading </div>
               :<div className="github-user">
                  <img className="github-user__avatar" src={this.state.user.avatar_url}/>
                  <div className="github-user__info">
                     <p>{this.state.user.login} ({this.state.user.name})</p>
                     <p>{this.state.user.bio}</p>
                  </div>
               </div>}
         </div>
      )
   }
}

export default GithubProfile;
