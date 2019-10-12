import React, {Component} from "react";
import logo from './logo.jpg';
import './App.css';
import $ from "jquery";
import BubbleMap from './components/bubbleMap'
import Slider from './components/slider'

class App extends Component{
  generateColor() {
    var r = Math.floor((Math.random() * 210) + 0);
    var g = Math.floor((Math.random() * 210) + 0);
    var b = Math.floor((Math.random() * 210) + 0);
    return ["rgb(" + r + "," + g + "," + b + ")", "rgb(" + (r + 30) + "," + (g + 30) + "," + (b + 30) + ")"]
  }
  state = {
    bubbles: [
      // {id: 1,  title: "One", size: 5, goodVotes: 1, badVotes:1, description: "One is first.", image: "../logo.jpg", color: this.generateColor()},
      // {id: 2,  title: "Two", size: 5, goodVotes: 1, badVotes:1, description: "Two is second.", image: "../logo.jpg", color: this.generateColor()},
      {id: 3,  title: "Borderlands 3", size: 5, goodVotes: 10, badVotes: 5, goodDescription:"Buy", badDescription:"Sam", description: "Borderlands 3 is an action role-playing first-person shooter video game developed by Gearbox Software and published by 2K Games. It is the sequel to 2012's Borderlands 2, and the fourth main entry in the Borderlands series.", image: "https://media.giphy.com/media/SsNn7kywo4KzCeyCWH/giphy.gif", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, im very excited."}]},
      {id: 4,  title: "Saga Genesis Mini", size: 5, goodVotes: 1, badVotes: 1, goodDescription:"Buy", badDescription:"Pass", description: "The Sega Genesis Mini, known as the Mega Drive Mini in regions outside of North America, is a dedicated console modeled on Sega's Genesis. The Mini emulates the original console's 16-bit hardware, and includes 42 games ported by M2. It is set for release in most regions on September 19, 2019.", image: "https://media0.giphy.com/media/VInpMQOLyHPefe7t6f/giphy.webp", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, looking freaking awesome."}]},
      {id: 5,  title: "Greenland", size: 5, goodVotes: 10, badVotes: 1, goodDescription:"Viking", badDescription:"Meh", description: "", image: "https://i.imgur.com/7yaMivE.jpg", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, looking freaking awesome."}]},
      {id: 6,  title: "White House Transcript Released: Trump Told Ukraine’s Leader to Work With Barr to Investigate Biden", size: 5, goodVotes: 5, badVotes: 3, goodDescription:"Fact", badDescription:"Exagerated", description: "WASHINGTON (Reuters) - U.S. President Donald Trump asked Ukrainian President Volodymyr Zelenskiy in a July telephone call to investigate whether former Vice President Joe Biden shut down an investigation into a company that employed his son, a summary of the call released by the Trump administration on Wednesday showed.", image: "https://i.imgur.com/akyknfo.png", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, looking freaking awesome."}]},
      {id: 7,  title: "Anticipation", size: 5, goodVotes: 4, badVotes: 1, goodDescription:"Heh", badDescription:"Meh", description: "", image: "https://i.imgur.com/Fdw336T.png", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, looking freaking awesome."}]},
      {id: 8,  title: "TIL scientists discovered a dinosaur tail perfectly preserved in amber. It is full of feathers.", size: 5, goodVotes: 5, badVotes: 2, goodDescription:"+1 learn", badDescription:"+0 learn", description: "The tail of a 99-million-year-old dinosaur has been found entombed in amber, an unprecedented discovery that has blown away scientists.", image: "https://cdn.cnn.com/cnnnext/dam/assets/161208121636-dinosaur-amber-2-exlarge-169.jpg", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, looking freaking awesome."}]},
      {id: 9,  title: "Releasly - Follow new open source releases", size: 5, goodVotes: 3, badVotes: 1, goodDescription:"Useful", badDescription:"Clutter", description: "", image: "https://i.imgur.com/akyknfo.png", color: this.generateColor(), comments: [{id: 1, name: "Cl4p Tr4p", image: "https://i.imgur.com/KhLxyoU.jpg", comment: "Most fun game ever cant, wait to play it. Hopefully they fixed the stairs bug."},{id: 2, name: "Jhony Jons", image: "https://i.imgur.com/bray6Ez.jpg", comment: "Dandy game, looking freaking awesome."}]}
    ]
  }
  decreaseSize = () =>{
    const bubbles = this.state.bubbles.map(bubble =>{
      bubble.size--;
      return bubble;
    })
    this.setState({bubbles})
  }

  handleGood = bubbleId =>{
    const bubbles = this.state.bubbles.map(bubble =>{
      if(bubbleId == bubble.id){
        bubble.size++;
        bubble.goodVotes++;
      };
      return bubble
    })
    this.setState({bubbles})
  }

  handleBad = bubbleId =>{
    const bubbles = this.state.bubbles.map(bubble =>{
      if(bubbleId == bubble.id){
        bubble.size++;
        bubble.badVotes++;
      };
      return bubble
    })
    this.setState({bubbles})
  }

  componentDidMount(){
    setInterval(this.decreaseSize,1000000)
  }

  render(){
    return (
      <div style={{padding:"10px"}} className="App">
        <BubbleMap onGood={this.handleGood} onBad={this.handleBad} bubbles={this.state.bubbles} />
      </div>
    )
  }
}

export default App;

// <Slider colorI="rgb(191, 191, 191)" colorF="rgb(0, 156, 146)" height="100" width="100" />


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
