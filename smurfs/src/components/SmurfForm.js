import React, { useEffect, useState } from "react";
import { getSmurf, postSmurf } from "../actions";
import { connect } from "react-redux";



export const SmurfForm = ( { getSmurf, smurfList, postSmurf, requested } )=> {
const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: ""});

const handleChanges = e => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
  };

const handleClick = e =>{
    e.preventDefault();
    postSmurf(newSmurf);
    console.log("inside the handle click", newSmurf)

}
console.log(newSmurf, "value of new smurf")


    useEffect(()=>{
        getSmurf()
    }, [getSmurf])

if (requested) {
    return <h3>ADDING YOUR SMURFY!</h3>
}


return(

  <div>
      <h2>SMURF LIST</h2>
      {smurfList.map(smurf=>{
          return(
              <>
              <div>{smurf.name}</div>
                <div>{smurf.age}</div>
            <div>{smurf.height}</div>
            </> 
         )
      })}
      
      <form>

        Name: <input type="text"  value ={newSmurf.name} name="name" onChange={handleChanges} />
        Age: <input type="text" value={newSmurf.age} name="age" onChange={handleChanges}/>
        Height: <input type="text" value ={newSmurf.height} name="height" onChange={handleChanges}/>

        <button onClick={handleClick}>ADD SMURF</button>

      </form>
    </div>  
)

}


const mapStateToProps = state => {
    return{
        smurfList: state.smurfList,
        requested: state.requested
    }
}

export default connect(mapStateToProps, { getSmurf, postSmurf })(SmurfForm);