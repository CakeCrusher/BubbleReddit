import React, {Component} from "react"
import "../App.css"
import $ from "jquery";
import Comment from "./comment"
class CommentsTab extends Component{
  handleToggle = () =>{
    const ct_container = $(".CommentsTab-container")
    const cur_height = parseInt($(ct_container).css("height"),10)
    if (cur_height < 1){
      $(ct_container).css({
        height:"50%"})
    }
    else{
      $(ct_container).css({height:"0"})
    }
  }
  render(){
    console.log("abcde");
    const {bubble} = this.props;
    return(
      <div style={{backgroundColor: bubble.color[1].slice(0,-1) + ",0.7)"}} className="CommentsTab-container">
        <button onClick={this.handleToggle} className="CommentsTab-button">Comments</button>
        {bubble.comments.map(comment =>
          <Comment color={bubble.color} comment={comment} />
        )}
      </div>
    )
  }
}
export default CommentsTab
