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
    const {title, image, description} = this.props;
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
          onClick={this.handleLikeIncrement}
          />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-bg-light">
            &#x2764; {this.state.likes}
        </Card.Footer>
      </Card>
    )
  }
}
