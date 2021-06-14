import React, {Component} from 'react';   // We need to import "React" because we will be writing JSX, which will then converted into Javascript which uses "React".

/* This is Functional Component.

  const SearchBar = () => {                        
       return <input />
   };

   Note :
   1]Functional Components just returns JSX, which will then converted to HTML.
   2]They cannot communicate with other components.
   3]It does not have ability to be aware of its surrounding and state.
   
*/


/* This is Class component.         
   Note : 1]This can communicate with other components.
          2]Whenever we define class component we should always define "render() method" and return some JSX through it.
*/

class SearchBar extends Component{

    constructor (props) {                                          
        super(props);

        this.state = { term : '' }                                    // Initializing State inside "Class Component"

    }

    render() {
        return (
            <div>
                <input onChange = {this.onInputChange} />             {/*Here we are attacing our "Event Handler" to the "Element". Here 'onchange' is the specific property of 'input' element. */}
                Value of the input : {this.state.term}                {/*Whenever we want to reference a javascript variable inside JSX we need to use "Curly Brackets {} " */}
            </div>
        );
    }

    onInputChange = (event) => {                                           // 1] This is "Event Handler". 'event' Object -------> It holds the information about the event occured.
        console.log(event.target.value);                                   // 2] Here Event Handler is arrow function because 'this' needs to point to the Object which called the funciton.
        this.setState({                                                    // 3] If normal function is used then 'this' will point to "Global Object"
            term : event.target.value                                      // 4] Updating our "State" inside "Event Handler". 
        });                                                                // 5] So now whenever 'event' occurs our 'state' gets updated.
    }                                                                      // 6] Whenever 'state' gets updated, re-rendering occurs and latest output can be seen in DOM i.e on screen
}

/* Handling Events in React :
1] Declare an "Event Handler". ( A function which is to be run whenever an event occurs. )
2] Passing "Event Handler" to the "Elements" that we want to monitor for events.
*/

/* State :
1] It is a plane Javascript Object which is used to record and react to user events.
2] Each instance of "Class Component" has its own "State" object.
3] Whenever a component state is changed, component immidiately re-renders. 
4] It also forces all of childrens to re-render as well.
5] Before using state inside a "Class Component" we need to initialize the 'state object'.
6] 
*/


// This "Default-Export"(In a file only one is allowed)
export default SearchBar;