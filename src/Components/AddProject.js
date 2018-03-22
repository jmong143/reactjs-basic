import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development', 'UI AA']
  }

  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Input Required");
    }else{
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        // console.log(this.state);
        //HERE YOU CAN PASS NEW DATA TO ITS BASE STATE WHERE THE RETRIEVAL FUNCTION LOCATE
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key = {category} value = {category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type = "text" ref = "title"/>
          </div>

          <div>
            <label>Category</label><br />
            <select ref = "category">
              {categoryOptions}
            </select>
          </div>
          <button type = "submit">Submit</button>

          <br />
          <br />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}


export default AddProject;
