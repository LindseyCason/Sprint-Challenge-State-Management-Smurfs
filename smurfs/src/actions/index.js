export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (smurf) => {

    return{
        type: ADD_SMURF,
        payload: smurf
    }
};