import axios from "axios"


axios.get("http://localhost:3333/smurfs")
.then(response =>{
    console.log("response from axios inside initial State", response);
    
})
.catch(err =>{
    console.log("There is an error in here somwhere")
})
    
    
    
    
    
    // dispatch({type: ADD_SMURF_SUCCESS, payload: response.data })
    
    
    
    
    
    //this payload needs to be the data from the input fields
    //this is going to post all of the smurfs in the array from response.data