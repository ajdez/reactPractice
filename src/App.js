import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from "./Layout.js";
import GuessThatNumber from "./GuessThatNumber.js";
import YouClicked from "./YouClicked.js";
import CharacterCounter from "./CharacterCounter";
import CharacterLimit from "./CharacterLimit";
import NumberGuessing from "./NumberGuessing";
import GithubProfile from "./GithubProfile";
import GithubSearch from "./GithubSearch";

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
   renderImage(arrayItem){
      return <ImageCaption key={arrayItem.id} src={arrayItem.source} text={arrayItem.text} />
   }
   render() {
      return (
         <div className="App">
            <div className="App-header">
               <img src={logo} className="App-logo" alt="logo"/>
               <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
               To get started, edit
               <code>src/App.js</code>
               and save to reload.
            </p>
            <hr/>
            <h2>testing ImageCaption</h2>
            <ImageCaption src={"http://i.imgur.com/D8JWn.jpg"} text={"wait a second, this isn't bacon"}/>
            <hr/>
            <div>{imageList.map(this.renderImage)}</div>
            <hr/>
            <h2>Testing Layout</h2>
            <Layout>
               <h2>About Us</h2>
               <p>We are <a href="https://facebook.github.io/react/">React</a> pros! Ask us anything.</p>
            </Layout>
            <hr/>
            <h2> Guess a number between 1 and 100 </h2>
            <GuessThatNumber />
            <hr/>
            <h2>How many times was the button clicked?</h2>
            <YouClicked />
            <hr/>
            <CharacterCounter />
            <hr/>
            <CharacterLimit limit={50}/>
            <hr/>
            <NumberGuessing />
            <hr/>
            <GithubProfile user={"ajdez"}/>
            <hr/>
            <GithubSearch />
         </div>
      )
   }
}

export default App;
