import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Default/Hello';
import './style.css';
import PersonList from './Person/PersonList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
    this.state={
      persons :[
        {name : 'A' ,id:1}, {name : 'B',id:2}, {name : 'C',id:3}, {name : 'D',id:4}
      ],
    showEmpolyee: false
    }
  }
    deleteClickedHandler =(index) =>{
      console.log('delete');
    const personObject = [...this.state.persons];
    personObject.splice(index,1);
    this.setState({persons:personObject});

  };
    textChangeHandler =(event,index) =>{
     
        const empIndex = this.state.persons.findIndex(p => {
          return p.id === index;
        });
         console.log(empIndex);
         const personObject = {...this.state.persons[empIndex]};
         personObject.name = event.target.value;
         const personlist = [...this.state.persons];
         personlist[empIndex] = personObject
        console.log(personObject);
        this.setState({persons:personlist}); 
  }
  buttonClickHandler =()=>{
    
    const shwoPerson = this.state.showEmpolyee;
    this.setState({showEmpolyee:!shwoPerson});
    console.log(this.state.showEmpolyee);
  }

  render() {
    let person = '';
    if(this.state.showEmpolyee){
     person= <PersonList persons={this.state.persons } deleteClickedHandler={this.deleteClickedHandler} 
     textChangeHandler ={this.textChangeHandler} showEmpolyee={this.state.showEmpolyee}/>
    }
    return (
      <div>
      <button onClick = {this.buttonClickHandler}>Click</button>
        <Hello name={this.state.name} />
        <p>
        {person}
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
