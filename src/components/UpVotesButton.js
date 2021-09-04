import React, { useState } from "react";

function UpVotesButton({ upVotes }) {
    const [ newUpVotes, setUpVotes ] = useState(upVotes);

    function handleUpVote() {
        setUpVotes(newUpVotes+1)
    }

    return (
        <button onClick={handleUpVote}>{newUpVotes} 👍</button>
    )
}

export default UpVotesButton