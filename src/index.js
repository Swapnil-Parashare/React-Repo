/*******************************************************************    Basics     *****************************************************************************************************

A] What is React?

1]It is a Javascript Library. It is used to produce HTML which is shown to user in the web browser.
2]When we write "React" code we are actually writting individual components or views.
3]Components are the snipptes of code that produce HTML.
4]We write these components and nest them by placing them inside one another in different fashion to build complex applications.
5]A component is the collection of Javascript funcitons that produce HTML.


B] Basic Flow :-

1] Create a component using Javascript.
2] Component returns 'JSX'. 
3] This "JSX" is then converted to HTML.
4] Put the "Component generated HTML" in the DOM.

Note : 1] '.render()' takes two arguments, HTML code and HTML Element.
       2] It displays specified HTML code into specified HTML Element.
       3] This process is called as "Rendering". (i.e our Step : 4)

C] JSX :-

1] It is a subset of Javascript.
2] It allows us to write a thing which looks like HTML but behind it is just Javascript.
3] It produces actual HTML which gets inserted into the DOM when we render this component.



D] 'react' library components :-

1]React    :- Knows how to work with react components, render them, nest them together.
2]ReactDOM :- To render a component into the DOM.

E] Youtube API :-

1]NPM package : 'youtube-api-search'
2]This given an api key and a search term it will make an api request to 'Youtube' and will retrun some data.

****************************************************************************************************************************************************************************************/

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';                                       // Importing our Youtube Api which we downloaded through NPM.

import SearchBar from './components/search_bar';                                 // Importing our "SearchBar" Component.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDUt3sFZE0U8k6pSQPVO3GvoKPD4UG6ARI';                       // This API key will allow us to make request to youtube.

           // AIzaSyDUt3sFZE0U8k6pSQPVO3GvoKPD4UG6ARI  : New                                                                          
           // AIzaSyC2h56pZ5fRgBj_a9Y9yjaVisjj3mWbQfk  : Old                                             
                                                                                 
                                                                                 // "App" is our 'Base Component'. All other component sits inside it.
class App extends Component {                                                    // We are creating "Class" of 'Component' App, we need to instantiate this class to create an object, inorder to render it.                   
   
    constructor(props){
        super(props);

        this.state = {
             videos : [],
             selectedVideo : null
            };

         this.videoSearch("Sandip Maheswari")

    }

    videoSearch(term){
        YTSearch({key : API_KEY, term : term}, (videos) => {        // Initially our App should not be empty, hence we are showing up some videos.
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            })                                                                  // Its actually ---> this.setState({videos : videos}), whenever the key and value is same we can write it single time. It is ES6 Syntax.
        }); 
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);                  // "debounce()" takes a function and returns a debounced version of it. Now we can only call this function once in 300 miliseconds.

        return (                                                                                  // 'JSX' being returned by our component 'App'.
        <div>
            <SearchBar onSearchTermChange = {videoSearch}/>                                       {/* 1st Component */}
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList  
                onVideoSelect =   {  Video  =>   this.setState({selectedVideo : Video})    }      /*1]Takes a Vedio as argument. 2]Makes 'selectedVedio' property of 'state' equal to argument's vedio. 3] It also returns the */          
                videos        =   {this.state.videos}
            />                           
        </div>
    ); 
    }
               
}

ReactDOM.render(<App />, document.querySelector('.container'));                 /* 1]'<App></App>'  and   '<App />'    are absoultely same. 
                                                                                   2]Here we creating an instance of our component class and passing it to 'render' function. 
                                                                                   3]Here 2nd argument i.e '.container' is out target DOM container were we are going to render our component.
                                                                                   4]You can see it inside our "index.html" <body></body> tag.
                                                                                */

/**************************************************************************************************************************************************************************************

IMP :-
1] React Application is build up of many such components.
2] We can nest these components in one another to do complex stuff.
3] We always make one component per file.


Nesting of Components :- 
1] Here is 'App' is our Base Component.                                    (Initially App was functional later we converted it class based)
2] It is a "Functional Component". It means it does not have any state.
3] But 'SearchBar' is a "Class Component".
4] Hence a "Functional Component" can contain a "Class Component".


Downwards Dataflow :- 
1] Only the most parent component in our application must be responsible for fetching data.
2] Hence our "App" component is responsible for fetching data.
3] Data Fetching can be done through "API" or "Flucx Framework" or "Redux" anything.

YTSearch Functioning :-
1]YTSearch() takes two arguments, first is an 'object' and second is "callback funciton"
2]Object contains 'API key' and the 'term' we want to search. 
3]Fetched data is held by 'data' inside callback function.


Props :-
1]Passing data from parent component to child component is called as props.
2]Here "App" is the parent component and "VideoList" is the child component.
3]Fetched data i.e "videos" are present inside "App" i.e parent component.
4]"videoList" which is the child component needs access to this data inorder to display it.
5]Hence here we are passing props(videos) from App to videoList.
6]Every time our App component is re-rendered due to change in its 'state', videoList will get new list of videos.


**************************************************************************************************************************************************************************************/

