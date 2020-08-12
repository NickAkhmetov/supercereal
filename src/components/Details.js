import React, { Fragment } from "react";
import maps from '../data/maps'

const Details = (props) => {
  let { state } = props;

  let { selectedCereal } = state;

  let {propertyNameMap, suffixMap} = maps;

  return (
    <Fragment>
      {selectedCereal && (
        <div className="cereal-details">
          <div className="row">
            <h1>{selectedCereal.name}</h1>
          </div>
          {Object.keys(propertyNameMap).map((key, idx) => (
            <div className="row" key={`detail-${idx}`}>
              <div className="col text-right">
                <b>{propertyNameMap[key]}</b>
              </div>
              <div className="col text-left">
                {selectedCereal[key]}
                {suffixMap[key]}
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Details;
