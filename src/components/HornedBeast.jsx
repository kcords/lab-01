import React from 'react';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props)
    this.state = {likes: 0};
  }

  handleLikeIncrement =() => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  }

  render(){
    const {title, image, description} = this.props;
    return(
      <>
        <h2>{title}</h2>
        <img
          src={image}
          alt={description}
          style={{maxWidth: '200px'}}
          onClick={this.handleLikeIncrement}
        />
        <p>{description}</p>
      </>
    )
  }
}

export default HornedBeast;