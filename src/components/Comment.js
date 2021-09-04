import React from "react";

function Comment({userComment}) {
    return (
        <div className="comment">
            <h3>{userComment.user}</h3>
            <p>{userComment.comment}</p>
        </div>
    )
}

export default Comment