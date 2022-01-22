import React from "react";
import { connect } from "react-redux";
import {incrementCount,decrementCount} from '../actions';

const Counter = (props) => {
  return (
    <div>
      <button onClick={()=> props.incrementCount()} className="ui button">Increment</button>
      <button onClick={()=> props.decrementCount()} className="ui button">Decrement</button>
      <h3>Count: {props.count}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps,{incrementCount,decrementCount})(Counter);
