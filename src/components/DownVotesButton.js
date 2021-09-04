import React, { useState } from "react";

function DownVotesButton({ downVotes }) {
    const [ newDownVotes, setDownVotes ] = useState(downVotes);

    function handleDownVote() {
        setDownVotes(newDownVotes+1)
    }

    return (
        <button onClick={handleDownVote}>{newDownVotes} 👎</button>
    )
}

export default DownVotesButton