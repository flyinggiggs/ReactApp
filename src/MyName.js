import React, {Component, Fragment} from 'react';

class MyName extends Component{
  render(){
    return(
        <div>
          <b>Hi! My name is {this.props.name}.</b>
      </div>
    ); 
  }
}

export default MyName