import { GET_SMURF, GET_SMURF_SUCCESS, POST_SMURF, POST_SMURF_SUCCESS } from "../actions";

export const initialState={
    smurfList:[],
    error: "",
    requested: false,
    adding: false
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
    
    return {
        ...state,
        smurfList: action.payload,
        requested: false,
        error: ""
    }
     
     case POST_SMURF:
         console.log("im inside of post smurf", state)
         return {
            ...state,
            adding: true,
            error: ""

         }

    case POST_SMURF_SUCCESS:
         return {
             ...state,
             smurfList: action.payload,
             adding: false,
             error: ""
         }
    default:
        return state;    
}
};
export default reducer;
