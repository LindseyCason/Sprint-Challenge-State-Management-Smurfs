import { ADD_SMURF, ADD_SMURF_SUCCESS } from "../actions";

const initialState = {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
};

export const reducer = (state=initialState, action) =>{
switch(action.type){
    case ADD_SMURF:
        console.log("Loading your smurfs")
        return{
            ...state,
            requested: true
        }


    case ADD_SMURF_SUCCESS:        

    console.log(action.payload, "smurfsuccess")
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
