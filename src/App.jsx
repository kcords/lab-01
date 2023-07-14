import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import beastData from './assets/data.json'
export default class App extends React.Component{
  render() {
    return(
      <>
        <Header />
        <Main beastData={beastData} />
        <Footer />
      </>
    )
  }
}
