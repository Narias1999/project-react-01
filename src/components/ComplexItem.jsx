import React from 'react';
import './../styles/components/ComplexItem.styl';

function ComplexItem({ title, subtitle, dateFrom, dateTo, description }) {
  const descriptionParagraphs = description ? description.split('\n') : [];

  return (
    <div className="ComplexItem">
      <h3 className="ComplexItem-title">{title}</h3>
      <strong className="ComplexItem-subtitle">{subtitle}</strong>
      {descriptionParagraphs.map((paragraph, index) => (
        <p className="ComplexItem-description" key={index}>
          {paragraph}
        </p>
      ))}
      <strong className="ComplexItem-dates">
        {dateFrom} - {dateTo}
      </strong>
    </div>
  );
}

export default ComplexItem;
