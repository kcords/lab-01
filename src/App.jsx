import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import beastData from './assets/data.json'
class App extends React.Component{
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

export default App;