import React from 'react';
import ComplexItem from './ComplexItem';

function Academic({ academicItems = [{}] }) {
  return (
    <section className="Education">
      <h2 className="Education-title">Education</h2>
      <div className="Education-container">
        {academicItems.map(
          ({ institution, dateFrom, dateTo, degree }, index) => (
            <ComplexItem
              title={institution}
              subtitle={degree}
              key={index}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Academic;
