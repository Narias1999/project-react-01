import React from 'react';

function Interest({ interests = [] }) {
  return (
    <section className="Interest">
      <h2 className="Interest-title">Interests</h2>
      <ul className="List">
        {interests.map(
          (interest, index) => (
            <li className="ListItem" key={index}>{interest}</li>
          )
        )}
      </ul>
    </section>
  );
}

export default Interest;
