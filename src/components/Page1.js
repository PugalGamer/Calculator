// Page1.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

function Page1(props) {
  return (
    <div>
      <h2>This is Page 1</h2>
      <p>Content for Page 1 goes here.</p>
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Header>
              card1
            </Card.Header>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Card.Header>
              card2
            </Card.Header>
          </Card>
        </Col>
      </Row>
      <Row>

      </Row>
      <Link to="/page2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
