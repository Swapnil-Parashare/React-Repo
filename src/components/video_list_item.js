import React from 'react';

const VideoListItem = (props) =>{                              // Here 'props' is nothing but the single video given by "videoList".
   
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;

    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick = {() => onVideoSelect(video)} className = "list-group-item">                                  {/* "onClick" property is discussed below. */}
            <div className = "video-list-media">

                <div className = "media-left">
                    <img className = "media-object"  src = {imageUrl}/>                   {/* Thumbnail */}
                </div>

                <div className = "media-body">
                    <div className = "media-heading">{video.snippet.title}</div>           {/* Title */}
                </div>

            </div>
        </li>
    )
}

export default VideoListItem;

/* onClick :-
1] Whenever particular video is clicked, then "onVideoSelect()" function is called by passing the clicked video as argument.
2] "onVideoSelect()" function takes a video and sets it equal to "selectedVideo" property of the 'state' of "App".
3] As soon as state is changed re-rendering occurs.
4] Thus "videoDetail" of selectedVideo is showed on the screen.


onSelectedVideo() Function :-          "App" Component
                                            |
                                            |
                                            V
                                    "VideoList" Component    
                                            |
                                            |
                                            V
                                 "VideoListItem" Component
*/