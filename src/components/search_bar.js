/*****************************************************************  Types of components in React.js *********************************************************************************

  A]"Functional Component".

  Example :-
  const SearchBar = () => {                        
       return <input />
   };


   Note :
   1]Functional Components just returns JSX, which will then converted to HTML.
   2]They cannot communicate with other components.
   3]It does not have ability to be aware of its surrounding and state.
   


   B] "Class component".   (We have used this below)  

   Note : 1]This can communicate with other components.
          2]Whenever we define class component we should always define "render() method" and return some JSX through it.

***************************************************************************************************************************************************************************************/



import React, {Component} from 'react';                                     // We need to import "React" because we will be writing JSX, which will then converted into Javascript which uses "React".

class SearchBar extends Component{

    constructor (props) {                                          
        super(props);

        this.state = { term : '' }                                          // Initializing State inside "Class Component"

    }

    render() {
        return (
            <div className = "search-bar">
                <input                                                
                   value = {this.state.term}
                   onChange = {this.onInputChange}                         /*Here we are attacing our "Event Handler" to the "Element". Here 'onchange' is the specific property of 'input' element. */
                />                                                                             {/*This is "Event Handler". 'event' Object -------> It holds the information about the event occured. */}
            </div>
        );
    }

    onInputChange = (event) => {                                             // Here Event Handler is arrow function because 'this' needs to point to the Object which called the funciton.
                                                                             // If normal function is used then 'this' will point to "Global Object"
    this.setState({ term : event.target.value });                            // Updating our "State" inside "Event Handler". So now whenever 'event' occurs our 'state' gets updated.
    this.props.onSearchTermChange(event.target.value);                       // Whenever user search something our "onSearchTermChange()" function is called which ultimately changes the state and causes re-rendering.  
                                                                             

    }                                                                       // 6] Whenever 'state' gets updated, re-rendering occurs and latest output can be seen in DOM i.e on screen
}


export default SearchBar;                                                  // This "Default-Export"(In a file only one is allowed)





/************************************************************************    Important      *****************************************************************************************


A] Handling Events in React :-

1] Declare an "Event Handler". ( A function which is to be run whenever an event occurs. )
2] Passing "Event Handler" to the "Elements" that we want to monitor for events.


B]State :-

1] It is a plane Javascript Object which is used to record and react to user events.
2] Each instance of "Class Component" has its own "State" object.
3] Whenever a component state is changed, component immidiately re-renders. 
4] It also forces all of childrens to re-render as well.
5] Before using state inside a "Class Component" we need to initialize the 'state object'.


C]Controlled Feild :-

1] It is 'form' element like 'input', whose value is set by the "state".
2] A "Controlled Component" has its 'value' set by 'state'.
3] Hence its 'value' changes when its 'state' changes.


D]Data Flow of "Controlled Component" :-

1] We write something.
2] Event Handler gets called.
3] Our 'state' is updated by "Event Handler".
4] Due to update in 'state' re-rendering occurs.
5] During re-rendering, input's 'value' is changed by updated 'state'.
6] In this way 'input' being a controlled component, its 'value' is always set by 'state'


*********************************************************************************************************************************************************************************/