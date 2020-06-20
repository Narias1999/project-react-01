import React from 'react';

function Skills({ skills = []}) {
  return (
    <section className="Skills">
      <h2 className="Skills-title">Skills</h2>
      <ul className="List">
        {skills.map(
          (skill, index) => (
            <li className="ListItem" key={index}>{skill}</li>
          )
        )}
      </ul>
    </section>
  );
}

export default Skills;
