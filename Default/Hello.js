import React,{useEffect} from 'react';

const hello = props =>{
  useEffect(()=>{
    //alert("I'm excuted");
    console.log('Main use effect')
 return()=>{
   console.log('return invokes')
 }
  },[]
  );
  return(
    <div>
    <button onClick = {props.buttonClicked}></button>
        <p>{props.name}</p>
    </div>
    );
}

export default hello;