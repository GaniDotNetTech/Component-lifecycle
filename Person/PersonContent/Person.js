import React,{Component} from 'react'
import Css from './Person.css'

class person extends Component{
  render(){
    console.log('Excuting person')
    return(
  //   <div className = {Css.person}>
  //     <p >I'm loaded{this.props.name}</p>
  //     <input type="text" onChange={this.props.textChangeHandler} value={this.props.name} />       
  //     <button onClick={this.props.deleteClickedHandler}>Delete</button>
       
  // </div>
   <div className={Css.Person}>
        <p onClick={this.props.deleteClickedHandler}>
          I'm {this.props.name} and I am {this.props.name} years old!
        </p>
        <p>Modified</p>
        <input
          type="text"
          onChange={this.props.textChangeHandler}
          value={this.props.name}
        />
      </div>
);
}


}
export default person