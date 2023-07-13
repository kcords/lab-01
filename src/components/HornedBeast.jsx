import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        <Card.Footer className="text-center">
          <Button
            onClick={this.handleLikeIncrement}
            variant="danger"
          >
            &#9829;
            {
              this.state.likes > 0
                ? ` liked ${this.state.likes}x`
                : ` add a like`
            }
          </Button>
        </Card.Footer>
      </Card>
    )
  }
}

export default HornedBeast;