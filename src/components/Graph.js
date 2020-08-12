import React, { useState } from "react";
import maps from "../data/maps";
import actions from "../reducers/actions";

import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Hint,
} from "react-vis";

const Graph = (props) => {
  let { state, dispatch } = props;
  let { calories, fatCalories, carbCalories, proteinCalories, displayMacros, animation } = state;
  let { manufacturerMap } = maps;
  
  let [hoveredBar, setHoveredBar] = useState(null);

  let renderCalorieSeries = (data, color, key) => (
    <VerticalBarSeries
      key={key}
      data={data}
      onValueMouseOver={(d, { event }) => {
        let { cereal } = d;
        setHoveredBar({
          name: cereal.name,
          manufacturer: manufacturerMap[cereal.mfr],
          label: d.label,
          labelCalories: Math.ceil(d.cal),
          caloriesPerCup: Math.ceil(cereal.calories / cereal.cups),
          x: event.screenX,
          y: event.clientY - (event.screenY - event.clientY - 50) / 2,
        });
      }}
      onValueMouseOut={(d, event) => setHoveredBar(null)}
      onValueClick={(d, event) => dispatch(actions.selectCereal(d.cereal, d.x))}
      color={color}
      animation={animation}
    />
  );

  let indices = calories.map((cal, idx) => idx);

  let hint;

  if (hoveredBar) {
    hint = {
      Name: hoveredBar.name,
      Manufacturer: hoveredBar.manufacturer,
      "Calories per Cup": hoveredBar.caloriesPerCup
    }

    if (hoveredBar.label) {
      hint[hoveredBar.label] = hoveredBar.labelCalories;
    }
  }
  
  return (
    <div className="d-flex justify-content-center container">
      <XYPlot  
          height={475} 
          width={window.innerWidth - 100} 
          margin={{left: 40, right: 10, top: 10, bottom: 175}}
          stackBy={displayMacros ? "y" : null} 
          stroke="black"
          dontCheckIfEmpty={true}
          animation={animation}
        >
        <VerticalGridLines animation="true" />
        <HorizontalGridLines animation="true" />
        {displayMacros ? 
          [renderCalorieSeries(fatCalories, "yellow", 1), 
          renderCalorieSeries(carbCalories, "green", 2), 
          renderCalorieSeries(proteinCalories, "blue", 3)] : 
          renderCalorieSeries(calories, "green", 4)}
        {hoveredBar && (
          <Hint
            xType="literal"
            yType="literal"
            getX={() => hoveredBar.x}
            getY={() => hoveredBar.y}
            align={{
              horizontal: "left",
              vertical: "auto",
            }}
            value={hint}
          />
        )}
        <XAxis 
          tickValues={indices}
          tickLabelAngle={-45}
          tickFormat={(d) => {
            return calories[d].cereal.name
          }}
        />
        <YAxis
          title="Calories per Cup"
          position="middle"
          tickValues={[0, 200, 400]}
          animation="true"
          style={{
            title: { transform: "translate(2px,0)" },
          }}
        />
      </XYPlot>
    </div>
  );
};

export default Graph;
