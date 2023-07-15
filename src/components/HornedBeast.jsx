import React from 'react';

import Card from 'react-bootstrap/Card';

export default class HornedBeast extends React.Component{
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
    const { beast, handleBeastSelection } = this.props;
    const { title, image_url: image, description } = beast;

    return(
      <Card
        bg="light"
        border="secondary"
        className="mb-4"
        >
        <Card.Img
          src={image}
          alt={description}
          style={{cursor: 'pointer'}}
          onClick={() => handleBeastSelection(beast)}
          />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{cursor: 'pointer'}}
          className="text-bg-light"
          onClick={this.handleLikeIncrement}
        >
            &#x2764; {this.state.likes}
        </Card.Footer>
      </Card>
    )
  }
}
