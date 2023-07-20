import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import HornedBeast from "./HornedBeast";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBeasts: this.props.beastData,
      uniqueHornCounts: [
        "All",
        ...Array.from(
          new Set(this.props.beastData.map(({ horns }) => horns))
        ).sort((a, b) => a - b),
      ],
    };
  }

  render() {
    const { handleBeastSelection } = this.props;
    return (
      <main>
        <Container fluid>
          <Row className="sticky-top">
            <Col xs={12} sm={12} md={10} lg={10} xl={8}>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="search">Search</InputGroup.Text>
                  <Form.Control
                    aria-label="Search"
                    aria-describedby="search"
                    name="searchTerm"
                  />
                  <InputGroup.Text id="horn-filter">
                    Horn Filter
                  </InputGroup.Text>
                  <Form.Select name="horns">
                    {this.state.uniqueHornCounts.map((label) => (
                      <option key={label}>{label}</option>
                    ))}
                  </Form.Select>
                  <Button
                    variant="outline-secondary"
                    id="clear-search"
                    type="reset"
                  >
                    &#10005;
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <Row className="mb-4">
            {this.state.filteredBeasts.map((beast) => (
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
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}
