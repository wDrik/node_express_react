import React, { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class ListBillComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Container>
        <Row>
          <Col x2="12" sm="12" md="12" className="m-1tbem">
            <Link className="btn btn-primary" to="/bill/new">Create</Link>
          </Col>
        </Row>
        <Row>
          <Col x2="12" sm="12" md="12">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bill 1</td>
                  <td>10</td>
                  <td>IN</td>
                  <td>
                    <Button color="danger">Remove</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListBillComponent;
