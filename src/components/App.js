import video from "../data/video.js";
import Video from "./Video";
import VideoDetails from "./VideoDetails.js";
import CommentsSection from "./CommentsSection.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video url={video.embedUrl} />
      <VideoDetails 
        url={video.embedUrl}
        title={video.title} 
        views={video.views} 
        created={video.createdAt} 
        upVotes={video.upvotes}
        downVotes={video.downvotes}
      />
      <br></br>
      <CommentsSection comments={video.comments}/>
    </div>
  );
}

export default App;
