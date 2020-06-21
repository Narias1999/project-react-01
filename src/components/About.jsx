import React from 'react';
import './../styles/components/About.styl'

function About({ title, phone, email, website, adress }) {
  return (
    <div className="About">
      <h3 className="About-title">{title}</h3>
      <div className="About-contactInfo">
        <span className="About-item">{phone}</span>
        <a className="About-item" href={`mailto:${email}`}>{email}</a>
        <a className="About-item" href={`https://${website}`}>{website}</a>
        <span className="About-item">{adress}</span>
      </div>
    </div>
  );
}

export default About;
