import React, {Component} from "react";
import "../App.css";
import $ from "jquery";
import Bubble from "./bubble";

class BubbleMap extends Component{
  render(){
    const {onGood,onBad,bubbles} = this.props;
    return(
      <div>
        {bubbles.map(bubble =>
          <Bubble key={bubble.id} onGood={onGood} onBad={onBad} bubble={bubble} />
        )}
      </div>
    )
  }
}
 export default BubbleMap;
