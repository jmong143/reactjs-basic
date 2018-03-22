import React, {Component} from 'react';

class Header extends Component {

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
      <div>THIS IS HEADER</div>
    );
  }
}

export default Header;
