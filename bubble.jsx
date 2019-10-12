import React, {Component} from "react"
import "../App.css"
import $ from "jquery";
import CommentsTab from "./commentsTab"
class Bubble extends Component{
  good_bad_perc(goodVotes, badVotes) {
    var total = goodVotes + badVotes
    var goodPerc = Math.round((goodVotes / total) * 100).toString()
    var badPerc = Math.round((badVotes / total) * 100).toString()
    console.log(goodPerc, "//", badPerc);
    return {good: goodPerc, bad: badPerc}
  }
  render(){
    const {onGood,onBad,bubble} = this.props;
    const bubbleDynamicStyle = {
      margin: "10px",
      width: ((20 + (bubble.size + bubble.goodVotes + bubble.badVotes)) * 0.8).toString() + "vmin",
      height: ((30 + (bubble.size + bubble.goodVotes + bubble.badVotes)) * 0.8).toString() + "vmin",
      borderColor: bubble.color[0],
      backgroundColor: bubble.color[1],
      color: bubble.color[0]
    };
    // const bubbleHrStyle = {
    //   borderColor: bubble.color[1],
    //   backgroundColor: bubble.color[1],
    //   color: bubble.color[1],
    //   height: "3px",
    //   width: "100%"
    // }
    const contentContainerStyle = {
      backgroundColor: bubble.color[1],
      color: "white"
    }
    const voteGoodStyle = {
      width: this.good_bad_perc(bubble.goodVotes, bubble.badVotes).good + "%"
    }
    const voteBadStyle = {
      width: this.good_bad_perc(bubble.goodVotes, bubble.badVotes).bad + "%"
    }
    console.log(bubble.image);
    return(
      <div style={bubbleDynamicStyle} className="Bubble-container">
        <div style={{backgroundColor: bubble.color[0]}} className="Bubble-title">{bubble.title}</div>
        <div style={contentContainerStyle} className="Bubble-content-container">
          <img src={bubble.image} className="Bubble-img" />
          <div className="Bubble-description">{bubble.description}</div>
        </div>
        <CommentsTab bubble={bubble}/>
        <div style={{backgroundColor: bubble.color[0]}} className="Bubble-rating-counter">{bubble.goodVotes + bubble.badVotes - 2} votes</div>
        <div className="Bubble-rating-container">
          <div onClick={() => onBad(bubble.id)} style={voteBadStyle} className="Bubble-vote vote-bad">
            <div className="vote-percentage vote-p-bad">{this.good_bad_perc(bubble.goodVotes, bubble.badVotes).bad}%</div>
            <div className="vote-description">{bubble.badDescription}</div>
          </div>
          <div onClick={() => onGood(bubble.id)} style={voteGoodStyle} className="Bubble-vote vote-good">
            <div className="vote-percentage vote-p-good">{this.good_bad_perc(bubble.goodVotes, bubble.badVotes).good}%</div>
            <div className="vote-description">{bubble.goodDescription}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bubble;
