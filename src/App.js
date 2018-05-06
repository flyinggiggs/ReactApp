import React, {Component, Fragment} from 'react';
import './App.css';
import MyName from './MyName.js';
import Counter from './Counter.js';

class App extends Component{
  render(){
    return(
      <div>
      <MyName name="Functional Component React" />
      <Counter />
      </div>
    ); 
  }
}

export default App