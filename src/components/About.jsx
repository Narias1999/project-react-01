import React from 'react';
import './../styles/components/About.styl'

function About({ title, phone, email, website, adress }) {
  return (
    <div className="About">
      <h3>{title}</h3>
      <div class="About-contactInfo">
        <span>{phone}</span>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`https://${website}`}>{website}</a>
        <span>{adress}</span>
      </div>
    </div>
  );
}

export default About;
