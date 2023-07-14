import React from 'react';

export default class Footer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      mode: 'light'
    }
  }

  toggleMode = () => {
    this.setState(({mode}) => {
      const newMode = mode === 'light' ? 'dark' : 'light';
      const html = document.querySelector('html');
      html.setAttribute('data-bs-theme', newMode)
      return {mode: newMode}
    })
  }

  render() {
    return(
      <footer role="button" onClick={this.toggleMode}>
        <p>&copy; 2021 Kyle Cordell</p>
      </footer>
    )
  }
}
