import React from "react";
import { getSmurf } from "../actions";
import  SmurfForm  from "./SmurfForm";
import { connect } from 'react-redux';

import "./App.css";
const App  = () => {

  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm  />
      </div>
    );
  }


const mapStateToProps = state => {
  return{
      name: state.name,
      age: state.age,
      height: state.height,
      id: state.id
  }
}

export default connect(mapStateToProps, {getSmurf})(App);