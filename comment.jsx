import React, {Component} from "react"
import "../App.css"
import $ from "jquery";
class Comment extends Component{
  render(){
    const {color, comment} = this.props
    return(
      <div style={{backgroundColor: color[0]}} className="Comment-container">
        <div style={{backgroundImage: "url(" + comment.image + ")"}} className="Comment-image" />
        <div className="Comment-text">{comment.comment}</div>
    </div>
    )
  }
}
export default Comment
