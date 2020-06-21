import React from 'react';
import ComplexItem from './ComplexItem';
import './../styles/components/Experience.styl'

function Experience({ experienceItems = [{}] }) {
  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      <div className="Experience-container">
        {experienceItems.map(
          ({ company, startDate, endDate, jobTitle, jobDescription }, index) => (
            <ComplexItem
              className="Experience-item"
              title={company}
              subtitle={jobTitle}
              key={index}
              dateFrom={startDate}
              dateTo={endDate}
              description={jobDescription}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Experience;
