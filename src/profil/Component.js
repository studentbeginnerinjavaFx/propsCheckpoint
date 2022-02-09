import React from 'react';
import PropTypes from 'prop-types';


const Component = (props) => {
  return (
  <div> 
    <h3 onClick={()=>props.handleName (props.Fullname)}>My FullName is {props.Fullname}</h3>  

           <p>My Bio is {props.Bio}  
            My Profession is {props.profession} </p>

  <div>
    <h3 style={{ color:"red",fontSize:"18px",fontFamily:'serif'}}>My Children Data is</h3> {props.x}</div>
  </div>
)

};

export default Component;

Component.defaultProps = {
  x :'Chargment...'
}

   Component.propTypes = {
     Fullname : PropTypes.string,
     Bio : PropTypes.string,
     profession : PropTypes.string,
   }