import React from 'react';

import actions from '../reducers/actions';

const Controls = props => {

  let {state, dispatch} = props

  return (
    <div className="controls">
      <button className="btn btn-primary mx-2" onClick={() =>{dispatch(actions.toggleMacros())}}>
        {state.displayMacros ? "Hide Macronutrient Calories" : "Display Macronutrient Calories"}
      </button>
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actions.toggleAnimation())}}>
        {state.animation ? "Disable Animation" : "Enable Animation"}
      </button>
    </div>
  );
}

export default Controls;
