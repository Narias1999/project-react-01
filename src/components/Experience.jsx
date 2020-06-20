import React from 'react';
import ComplexItem from './ComplexItem';
import './../styles/components/Experience.styl'

function Experience({ experienceItems = [{}] }) {
  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      <div className="Experience-container">
        {experienceItems.map(
          ({ companyName, dateFrom, dateTo, position }, index) => (
            <ComplexItem
              title={companyName}
              subtitle={position}
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

export default Experience;
