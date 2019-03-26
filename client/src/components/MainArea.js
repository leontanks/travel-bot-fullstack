import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TravelCard from './TravelCards/TravelCard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render () {
    return (
      <Container fluid>
        <Row>
        <TravelCard />
        </Row>
      </Container>
    )
  }
}

export default MainArea;