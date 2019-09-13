import { ADD_SMURF } from "../actions";

const initialState = {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
};

export const reducer = (state=initialState, action) =>{
switch(action.type){
    case ADD_SMURF:
        const { name, age, height } = action.payload
        return{
            ...state,
            state: {
                ...state,
                name: name,
                age: age,
                height: height,
                id: Date.now()

            }
        }
    default:
        return state;    
}
};
export default reducer;
