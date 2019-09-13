import React, { useEffect, useState } from "react";
import { addSmurf, postSmurf, ADD_SMURF_SUCCESS } from "../actions";
import { connect } from "react-redux";
import {reducer} from "../reducers";
import axios from "axios";

export const SmurfForm = ( { addSmurf, requested, id } )=> {
const [newBlue, setNewBlue] = useState('');

const handleChanges = e => {
    setNewBlue(e.target.value);
  };

  const updateSmurf = e => {
    e.preventDefault();
    addSmurf({type: ADD_SMURF_SUCCESS,
    payload: newBlue});
    console.log("udpate smurf firing")
  };

    useEffect(()=>{
        addSmurf()
    }, [addSmurf])

if (requested) {
    return <h3>ADDING YOUR SMURFY!</h3>
}


return(

  <div>
      <h2>SMURF LIST</h2>
      <form>

<input type="text"  defaultValue ="name" name="name" onChange={handleChanges} />
<input type="text" defaultValue="age" name="age" onChange={handleChanges}/>
<input type="text" defaultValue ="height" name="height" onChange={handleChanges}/>

    <button onClick={updateSmurf}>ADD SMURF</button>

      </form>
    </div>  
)

}


const mapStateToProps = state => {
    return{
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);