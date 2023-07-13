import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import HornedBeast from './HornedBeast'

class Main extends React.Component{
  render() {
    const { beastData } = this.props;
    return(
      <main>
        <Container fluid>
          <Row>
            {beastData.map(beast =>
             <Col key={beast._id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <HornedBeast
                title={beast.title}
                image={beast.image_url}
                description={beast.description}
              />
             </Col>
            )}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;