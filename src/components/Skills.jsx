import React from 'react';
import PercentageItem from './PercentageItem';

function Skills({ skills = []}) {
  return (
    <section className="Skills">
      <h2 className="Skills-title">Skills</h2>
      <ul className="List">
        {skills.map(({ name, percentage }, index) => (
          <PercentageItem
            className="Skills-item"
            name={name}
            percentage={percentage}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
