import React from "react";
import UpVotesButton from "./UpVotesButton";
import DownVotesButton from "./DownVotesButton";

// IS IT BETTER TO MAKE BOTH VOTE BUTTONS USING ONE COMPONENT
// I figured that I would need to make two states given we'd want each button to be tied to a different number, which made it seem equally as inefficient to have them come from a shared component where we'd have 2 states, 2 handle state functions, and an if else statement determining what's on the button

function VideoDetails({ title, views, created, upVotes, downVotes }) {
    return (
        <div className="video-details">
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {created}</p>
            <UpVotesButton upVotes={upVotes} />
            <DownVotesButton downVotes={downVotes} />
        </div>
    )
}

export default VideoDetails