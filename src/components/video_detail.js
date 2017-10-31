import React from 'react';
import VideoListItem from './video_list_item'

const VideoDetail = ({video}) => {

    if(!video)
        return <div></div>;
    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;
    return (
        <div className = "video-deatail colmd-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;
