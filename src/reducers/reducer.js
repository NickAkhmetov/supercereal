function reducer(state, action) {
  switch(action.type) {
    case "SELECT":
      let {selectedCereal, index} = action;
      return {...state, selectedCereal, index};
    case "TOGGLE_MACROS":
      let {displayMacros} = state;
      return {...state, displayMacros: !displayMacros}
    case "TOGGLE_ANIMATION":
      let {animation} = state;
      return {...state, animation: !animation}
    default:
      return state;
  }
}

export default reducer;