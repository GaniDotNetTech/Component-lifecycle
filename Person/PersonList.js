import React,{Component} from 'react'
import Person from './PersonContent/Person'

class PersonList extends Component{
  static getDerivedStateFromProps(props,state){
    console.log('Excuting getDerviedStateFromProps in PersonList')  ;  
    return state;
  }
   shouldComponentUpdate(nextProps,nextState){
    console.log('Excuting shouldComponentUdpate in PersonList');
    return true;
  }
  getSnapshotBeforeUpdate(pervProps,prevState){
   console.log('Excuting getShapShotBeforeUpdate in PersonList');
  }
   
      render(){
        console.log('Executing PersonList')
         
         return this.props.persons.map((person, index) => {
          return (
        <Person
        name ={person.name}
          key={person.id}
          textChangeHandler={event => this.props.textChangeHandler(event, person.id)} 
          deleteClickedHandler = {()=>this.props.deleteClickedHandler(index)}
        />
      );
    });
            
              
              
    }

}

export default PersonList