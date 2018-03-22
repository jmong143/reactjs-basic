import React, {Component} from 'react';

class Sample extends Component {
  componentDidMount(){

  }

  deleteProject(id){
    this.props.onDelete(id);
  }

  render(){
    let projectList;
    if(this.props.projects){
      projectList = this.props.projects.map(list => {
        return(
          <div key = {Math.random()}>
            <strong>Title</strong>: {list.title}<br/>
            <strong>Category</strong>: {list.category} <br/>
            <button onClick = {this.deleteProject.bind(this, list.id)}>Delete</a>
            <hr/>
          </div>
        )
      });

    }

    return(
      <div>MAIN CONTENT<br/>
        {projectList}
      </div>
    );
  }
}

Sample.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Sample;
