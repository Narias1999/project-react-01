import React from 'react';
import './../styles/components/PercentageItem.styl';

function PercentageItem({ percentage, name }) {
  return <div className="PercentageItem">
    <strong className="PercentageItem-name">{name}</strong>
    <div className="PercentageItem-bar">
      <div style={{
        width: percentage
      }}></div>
    </div>
  </div>;
}

export default PercentageItem;
