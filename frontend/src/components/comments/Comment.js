import React from "react";
import CommentsApi from "../../api/CommentsApi";

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postid: this.props.postid
       };



       //CommentsApi.deleteComment(3);
    }
 
    render() {
        return <li key={this.props.key}>{this.props.comment}
        <span className="badge badge-pill badge-danger mx-md-1" style={{cursor: "pointer"}} onClick={() => this.props.onDeleteClick()}> Delete</span>
        </li>
    }
}
export default Comment;
