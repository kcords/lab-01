import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import beastData from './assets/data.json'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null
    }
  }

  handleBeastSelection = (selectedBeast) => {
    this.setState({selectedBeast});
  }

  render() {
    return(
      <>
        <Header />
        <Main
          beastData={beastData}
          handleBeastSelection={this.handleBeastSelection}
        />
        <Footer />
        <SelectedBeast
          showModal={Boolean(this.state.selectedBeast)}
          selectedBeast={this.state.selectedBeast}
          handleBeastSelection={this.handleBeastSelection}
        />
      </>
    )
  }
}
