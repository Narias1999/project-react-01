import React from 'react';
import './../styles/components/Profile.styl'

function Profile({ description }) {
  return <section className="Profile">
    <h2>Profile</h2>
    <p className="Profile-description">{description}</p>
  </section>
}

export default Profile;
