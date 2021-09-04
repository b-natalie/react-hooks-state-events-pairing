import React, { useState } from "react";
import Comment from "./Comment";

function CommentsSection({ comments }) {
    const [ commentsVisible, setCommentVisibility ] = useState(true)

    function handleCommentsClick() {
        setCommentVisibility(!commentsVisible)
    }

    function showComments() {
        return (
            <div>
                <h2>{comments.length} Comments</h2>
                {comments.map(comment => {
                    return(<Comment userComment = {comment} />)
                })}
            </div>
        )
    }

    return (
        <div className="comments-section">
            <button onClick={handleCommentsClick}>Hide Comments</button>
            <hr></hr>
            {commentsVisible ? showComments() : null }
        </div>
    )
}

export default CommentsSection