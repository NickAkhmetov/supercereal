import React, {useReducer} from 'react';
import './App.css';
import 'react-vis/dist/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Controls from './components/Controls';
import Details from './components/Details';
import Header from './components/Header';
import Graph from './components/Graph';
import data from './data/data.json';
import reducer from './reducers/reducer';
import util from './data/util';

const App = props => {

  let {calories, fatCalories, carbCalories, proteinCalories} = util.processData(data);

  const initialState = {data, selectedCereal: null, displayMacros: false, animation: false, calories, fatCalories, carbCalories, proteinCalories};
  const [state, dispatch] = useReducer(reducer, initialState)

  return ( 
    <div className="App container">
      <Header/>
      <Controls state={state} dispatch={dispatch}/>
      <Graph state={state} dispatch={dispatch}/>
      <Details state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
