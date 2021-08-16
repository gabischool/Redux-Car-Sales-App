import React from 'react';
import { addFeature} from '../actions/carAction'; 
import { connect } from "react-redux";


const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}> + </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null,{addFeature })(AdditionalFeature);
 
