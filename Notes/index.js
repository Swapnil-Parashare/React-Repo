/* What is React?
--> 1]It is a Javascript Library. It is used to produce HTML which is shown to user in the web browser.
    2]When we write "React" code we are actually writting individual components or views.
    3]Components are the snipptes of code that produce HTML.
    4]We write these components and nest them by placing them inside one another in different fashion to build complex applications.
    5]A component is the collection of Javascript funcitons that produce HTML.
*/

/* Flow :-
1] Create a component.
2] Component should produce HTML.
3] Put the "Component generated HTML" in the DOM.
*/

/* JSX :-
1] It is a subset of Javascript. It allows us to write a thing which looks like HTML but behind it is just Javascript.
2] It produces actual HTML which gets inserted into the DOM when we render this component.
*/

/*
1] 'react' library has two components :- 1]React :- Knows how to work with react components, render them, nest them together.
                                         2]ReactDOM :- To render a component into the DOM.
*/

// NPM package : 'youtube-api-search' :- This given an api key and a search term it will make an api request and will retrun some data.

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC2h56pZ5fRgBj_a9Y9yjaVisjj3mWbQfk';                       // This API key will allow us to make request to youtube.

const App = () => {                                                              // We are creating "Class" of 'Component' App.                       
    return (                              // JSX
        <div>
            <SearchBar />              
        </div>
    );            
}

ReactDOM.render(<App />, document.querySelector('.container'));                 /* 1]'<App></App>'  and   '<App />'    are absoultely same. 
                                                                                   2]Here we creating an instance of our component class and passing it to 'render' function. 
                                                                                   3]Rendering means to convert our 'component' into html but were to put it. It requires a target DOM container.
                                                                                   4]Here 2nd argument i.e '.container' is out target DOM container were we are going to render our component.
                                                                                   5]You can see it inside our "index.html" <body></body> tag.
                                                                                */

/*
1] React Application is build up of many such components.
2] A component is a object which returns some amount of HTML.
3] We always make one component per file.
*/

/*Important
1] In "React.js" we write "Components" in Javascript. 
2] These Components returns "JSX".
3] When we reder our components. they are converted into "HTML".
4] Then this "HTML' is finally placed inside target DOM.
*/

