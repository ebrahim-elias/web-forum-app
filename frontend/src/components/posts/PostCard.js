import React from "react";
import CommentForm from "../comments/CommentForm";

class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            isAddingComment : false
        };
    }
   render() {
    const isAddingComment = this.state.isAddingComment;
       return (
           <div className="card mt-3">
               <div className="card-body">
                   <p>
                       {this.props.post.body}
                   </p>
                   <button className="btn btn-danger mx-md-1" onClick={() => this.props.onDeleteClick()}>Delete</button>
                   <button className="btn btn-primary" onClick={() => {this.setState({isAddingComment:!isAddingComment})}}>Comment</button>
                   {isAddingComment ? <CommentForm postid={this.props.post.id}/> : null}
               </div>
           </div>
       );
   }
}
export default PostCard;

