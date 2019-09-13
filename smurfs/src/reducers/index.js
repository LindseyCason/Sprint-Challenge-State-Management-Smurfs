import { GET_SMURF, GET_SMURF_SUCCESS } from "../actions";

export const initialState={
    smurfList:[{
        name: null,
        age: null,
        height: null,
        id: Date.now(),
        requesting: false
    }]
}
console.log("this is from your reducer", initialState)

export const reducer = (state=initialState, action) =>{
switch(action.type){
    case GET_SMURF:
        console.log("Loading your smurfs")
        return{
            ...state,
            requested: true,
            error: ""
        }


    case GET_SMURF_SUCCESS:        

    console.log(action.payload, "get smurf success")
    return [
        ...state,
        {name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        id: Date.now()}
     ]
    default:
        return state;    
}
};
export default reducer;
