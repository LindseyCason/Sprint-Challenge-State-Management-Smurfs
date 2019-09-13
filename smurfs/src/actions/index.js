import axios from "axios";
export const GET_SMURF = "GET_SMURF";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const POST_SMURF = "POST_SMURF"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"


const initialState={
    smurfList:[{
        name: null,
        age: null,
        height: null,
        id: Date.now(),
        requesting: false
    }]
}

export const getSmurf = () =>(dispatch) => {

dispatch({type: GET_SMURF});

axios.get("http://localhost:3333/smurfs")
.then(response =>{
    console.log("response from axios", response);
    dispatch({type: GET_SMURF_SUCCESS, payload: response.data })//this payload needs to be the data from the input fields
    //this is going to post all of the smurfs in the array from response.data
})
.catch(error =>{
    console.log("There is an error in here somwhere")
})
}

export const postSmurf = () =>(dispatch)=>{
    dispatch({type: POST_SMURF});

    axios.post("http://localhost:3333/smurfs/", /*newSmurf*/) //this new smurf will come from your state in your form. onSubmit.
    .then(response =>{
        console.log(response)
    })
}







