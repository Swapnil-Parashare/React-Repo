import React from 'react';

const VideoDetail = (props) => {

    const video = props.video;
                                                                                              
    if(!video){
        return <div>Loading......</div>                                                      // Initially 'vedios' array is empty as fetching process is asynchrounous and JS doesn't wait for anybody.
    }                                                                                        // Hence we first check, if it is empty "Loading...", as soon as data fetching is complete, state changes, re-rendering occurs and we see output. 


    const vedioID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${vedioID}`;
    
    return(                                                                                   // The "className" stuff is for "Bootstrap" styling.
        <div className = "video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {url}></iframe>
            </div>
            <div className = "details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
 
    );
}

export default VideoDetail;

/*
1] Due to this component we can see actual vedio.
2] I think its mostly due to "<iframe></iframe>" tag.
*/

/* Important :-
1] In React.js due to "Asynchronous" nature of Javascript, instant rendering takes place.
2] Due to this "Parent Components" are not successful in fetching all the data which is required by "Child Component" for redering.
3] Hence we need to handle this case manually at each child component.
 */