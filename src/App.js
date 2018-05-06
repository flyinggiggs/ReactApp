import React, {Component, Fragment} from 'react';
import './App.css';
import MyName from './MyName.js';

class App extends Component{
  render(){
    return(
      <MyName name="Functional Component React" />
    ); 
  }
}

export default App