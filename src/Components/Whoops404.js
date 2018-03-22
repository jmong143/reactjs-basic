import React, {Component} from 'react';

class Whoops404 extends Component {

  constructor(){
    super();
    this.state = {
      list: ""
    }
  }

  componendDidMount(){
    alert("COMPONENT SAMPLE CALLED");
  }

  render(){
    return(
      <div>Page not found</div>
    );
  }
}

export default Whoops404;
