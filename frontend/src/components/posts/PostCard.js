import React from "react";

function PostCard({post, onDeleteClick}) {
    return (
        <div className="card mt-3 row-3 overflow-auto">
            <div className="card-body">
                <p>
                    {post.body}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default PostCard;