import axios from "axios";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"

export const addSmurf = () =>(dispatch) => {

dispatch({type: ADD_SMURF});

axios.get("http://localhost:3333/smurfs")
.then(response =>{
    console.log("response from axios", response);
    dispatch({type: ADD_SMURF_SUCCESS, payload: response.data })//this payload needs to be the data from the input fields
    //this is going to post all of the smurfs in the array from response.data
})
.catch(err =>{
    console.log("There is an error in here somwhere")
})
}

// export const postSmurf = () =>(dispatch)=>{
//     axios.post("http://localhost:3333/smurfs",{
//         name: "Lindsey",
//         age: 32,
//         height: "6cm",
//         id: Date.now(),
//     })
//     .then(response =>{
//         console.log(response)
//     })
// }







