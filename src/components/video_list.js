/* Initial Information :-
1] This component doesn't need any 'state'.
2] Hence we can make it a plane function component.
3] We have already included "Bootstrap".
4] IMP :- 1]Here 'props' will arrive as an argument to our "Functional Component" ---> 'VideoList'.
          2]If we had "Class based Component" then 'props' are avialabe as "this.props".

Note : 'props' is nothing but the videos passed by "App" to "video_list"
          */



import React from 'react';
import VideoListItem from './video_list_item';                                  

const VideoList = (props) => {                                                          // 'props' are the 'videos' from 'App' Component.

    const videoItems = props.videos.map((i) => {                                        // 'videoList' requires 'VideoListItem' which we have imported above.
        return( 
            <VideoListItem
              onVideoSelect = {props.onVideoSelect}
              key = {i.etag} 
              video = {i} 
            />
            )                           // Here we are putting each video from the videos recieved equal to the 'video' propery of "VideoListItem".
    });                                                                                 //  We are also setting unique key for each video. It is 'etag' provided by Youtube itself. This unique key is neccessary for array items in "React".
                                                                                        // IMP : Now 'videoItems' is a array of "Component :- videoListItem", were each instance hold a single video.

    return(
        <ul className = "col-md-4 list-group">                                           {/* "className" is added for styling purpose using "Bootstrap". */}
            {videoItems}                                                                 {/* In JSX we are returing our "videoItem" Array */}
        </ul>
    )
}

export default VideoList;

/* 
Map :-
1] It is the property of array.
2] It takes one funciton as argument.
3] This function will get called with the each element of array.

*/