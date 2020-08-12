const actions = {
  selectCereal: (selectedCereal, index) => {return {type: "SELECT", selectedCereal, index}},
  toggleMacros: () => {return {type: 'TOGGLE_MACROS'}},
  toggleAnimation: () => {return {type: 'TOGGLE_ANIMATION'}}
}

export default actions;