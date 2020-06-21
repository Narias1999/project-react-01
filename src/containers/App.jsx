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
import getData from './../utils/getData';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  getData() {
    getData('http://localhost:8080/data.json')
    .then(({ data }) => this.setState({ data }));
  }

  componentDidMount() {
    this.getData.apply(this);
  }
  render() {
    return (
      <div className="ResumeContainer">
        <Header name={this.state.data.name} imageURL={this.state.data.avatar}>
          <About 
          title={this.state.data.profession}
          email={this.state.data.email}
          phone={this.state.data.phone}
          adress={this.state.data.address}
          website={this.state.data.website} />
        </Header>
        <Profile description={this.state.data.Profile} />
        <Experience experienceItems={this.state.data.experience} />
        <Academic academicItems={this.state.data.Academic} />
        <Skills skills={this.state.data.skills} />
        <Interest interests={this.state.data.interest} />
        <Languages languages={this.state.data.languages} />
      </div>
    )
  }
};

export default App;
