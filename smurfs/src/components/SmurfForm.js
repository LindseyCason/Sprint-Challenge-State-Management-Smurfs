import React, { useEffect, useState, useReducer } from "react";
import { getSmurf, postSmurf, GET_SMURF_SUCCESS } from "../actions";
import { connect } from "react-redux";
import axios from "axios";
import { initialState, reducer } from "../reducers"

export const SmurfForm = ( { getSmurf, requested, name, age, height, id, error } )=> {
const [newSmurf, setNewSmurf] = useState('');
const [state, dispatch] = useReducer(reducer, initialState); //these are intentionally backwards

const handleChanges = e => {
    setNewSmurf(e.target.value);
  };

//   const updateSmurf = e => {
//     e.preventDefault();
//     getSmurf();
//     console.log("udpate smurf firing")
//     //this is incorrect. This needs to dipatch an action with the payload of the new data accumulated from the form below on submit.

//     //you may need to create a custom hook to store 
//   };

    useEffect(()=>{
        getSmurf()
    }, [getSmurf, postSmurf])

if (requested) {
    return <h3>ADDING YOUR SMURFY!</h3>
}


return(

  <div>
      {/* <h2>SMURF LIST</h2>
      <div>{name}</div>
      <div>{age}</div>
      <div>{height}</div> */}
      <form type={onSubmit}>

Name: <input type="text"  defaultValue ="name" name="name" onChange={handleChanges} />
Age: <input type="text" defaultValue="age" name="age" onChange={handleChanges}/>
Height: <input type="text" defaultValue ="height" name="height" onChange={handleChanges}/>

    <button onClick={()=>postSmurf(newSmurf)}>ADD SMURF</button>

      </form>
    </div>  
)

}


const mapStateToProps = state => {
    return{
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id,
        requested: state.requested
    }
}

export default connect(mapStateToProps, { getSmurf, postSmurf })(SmurfForm);