import React from 'react';
import {connect} from "react-redux";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature} from './actions/carAction';


  


const App = (props) => {

console.log(props)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />

      </div>
    </div>
  );
};



const mapStateToProps = state => {
 
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect( mapStateToProps, {addFeature,removeFeature })(App);
