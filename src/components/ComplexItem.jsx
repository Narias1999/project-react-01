import React from 'react';
import './../styles/components/ComplexItem.styl'

function ComplexItem({ title, subtitle, dateFrom, dateTo }) {
  return (
    <div className="ComplexItem">
      <h3 className="ComplexItem-title">{title}</h3>
      <strong className="ComplexItem-subtitle">{subtitle}</strong>
      <p className="ComplexItem-dates">
        {dateFrom} - {dateTo}
      </p>
    </div>
  );
}

export default ComplexItem;
