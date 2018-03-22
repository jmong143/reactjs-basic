import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Header from './Components/Header';
import Sample from './Components/Sample';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import AddProject from './Components/AddProject';
class App extends Component {

  constructor(){
    super();
    this.state = {
      projects:[],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data});
        console.log(this.state)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    })
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Develppment'
      },
      {
        id: uuid.v4(),
        title: 'Ecommers Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  //happen when the component re-render
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    console.log("NEW PROJECT--> " + JSON.stringify(project))
    let projects = this.state.projects;
    projects.push(project);
    //RESETING THE STATE
    this.setState({projects: projects});
    /*<Sample projects = {this.state.projects}/>*/
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        My App
        <hr/>
        <hr/>

        <hr/>
      </div>
    );
  }

}

export default App;

/*  <AddProject addProject = {this.handleAddProject.bind(this)} />
  <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
  <Sample projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
  <Todos todos = {this.state.todos} />
  */
