import React from 'react';

export default class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: "Horned Animals!",
      color: "primary"
    }
  }

  handleClick = () => {
    this.setState({
      title: "Whimsical Pokey Beings... Ouch!",
      color: "danger"
    })
  }

  render() {
    return(
      <header
        className={`p-md-4 d-inline-block text-${this.state.color}`}
        role="button"
      >
        <h1 onClick={this.handleClick}>{this.state.title}</h1>
      </header>
    )
  }
}
