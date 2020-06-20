import React from 'react';

function Languages({ languages = [] }) {
  return (
    <section className="Languages">
      <h2 className="Languages-title">Languages</h2>
      <ul className="List">
        {languages.map(
          (language, index) => (
            <li className="ListItem" key={index}>{language}</li>
          )
        )}
      </ul>
    </section>
  );
}

export default Languages;
