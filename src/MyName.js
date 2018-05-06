import React, {Component, Fragment} from 'react';

class MyName extends Component{
  static defaultProps = {
    name: "Default Name"
  }
  render(){
    return(
        <div>
          <b>Hi! My name is {this.props.name}.</b>
      </div>
    ); 
  }
}

export default MyName