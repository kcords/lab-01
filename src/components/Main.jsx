import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import HornedBeast from './HornedBeast'

export default class Main extends React.Component{
  render() {
    const { beastData, handleBeastSelection } = this.props;
    return(
      <main>
        <Container fluid>
          <Row className="mb-4">
            {beastData.map(beast =>
             <Col
              key={beast._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="d-flex"
            >
              <HornedBeast
                beast={beast}
                handleBeastSelection={handleBeastSelection}
              />
             </Col>
            )}
          </Row>
        </Container>
      </main>
    )
  }
}
