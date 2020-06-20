import React from 'react';
import '../styles/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import data from "./../info.json"

const App = () => {
  return (
    <div className="ResumeContainer">
      <Header name="Nicolás Arias" imageURL="https://narias1999.github.io/assets/profile.jpg">
        <About 
        title={data.info.title}
        email={data.info.mail}
        phone={data.info.phone}
        adress={data.info.address}
        website={data.info.web} />
      </Header>
      <Profile description={data.description} />
      <Experience experienceItems={data.experience} />
      <Academic academicItems={data.education} />
      <Skills skills={data.skills} />
      <Interest interests={data.interests} />
      <Languages languages={data.languages} />
    </div>
  )
};

export default App;
