import React from 'react';
import ComplexItem from './ComplexItem';

function Academic({ academicItems = [{}] }) {
  return (
    <section className="Academic">
      <h2 className="Academic-title">Education</h2>
      <div className="Academic-container">
        {academicItems.map(
          ({ institution, startDate, endDate, degree, description }, index) => (
            <ComplexItem
              className="Academic-item"
              title={institution}
              subtitle={degree}
              description={description}
              dateFrom={startDate}
              dateTo={endDate}
              key={index}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Academic;
