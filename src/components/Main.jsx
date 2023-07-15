import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import HornedBeast from './HornedBeast'

export default class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleUpdateSearch = ({target: { value: searchTerm }}) => {
    this.setState({ searchTerm })
  }

  render() {
    const { beastData, handleBeastSelection } = this.props;
    return(
      <main>
        <Container fluid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={6}
              xl={4}
            >
              <InputGroup className="mb-3">
                <InputGroup.Text id="search">
                  Search
                </InputGroup.Text>
                <Form.Control
                  aria-label="Search"
                  aria-describedby="search"
                  value={this.state.searchTerm}
                  onInput={this.handleUpdateSearch}
                />
              <Button
                variant="outline-secondary"
                id="clear-search"
                onClick={() => {
                  this.setState({searchTerm: ''})
                }}
              >
                Clear
              </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mb-4">
            {beastData
              .filter(beast => {
                if (!this.state.searchTerm) return true;
                const fuzzySearchPattern = this.state.searchTerm
                  .split(' ')
                  .map(term => {
                    return term
                      .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                      .replace(/./g, "(?=.*$&)");
                  })
                  .join('');
                const regex = new RegExp(fuzzySearchPattern, "i");
                return regex.test(beast.title) || regex.test(beast.description)
              })
              .map(beast =>
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
              )
            }
          </Row>
        </Container>
      </main>
    )
  }
}
