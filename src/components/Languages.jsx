import React from 'react';
import PercentageItem from './PercentageItem';

function Languages({ languages = [] }) {
  return (
    <section className="Languages">
      <h2 className="Languages-title">Languages</h2>
      <ul className="List">
        {languages.map(({ name, percentage }, index) => (
          <PercentageItem
            className="Languages-item"
            name={name}
            percentage={percentage}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Languages;
