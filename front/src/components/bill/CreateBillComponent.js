import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import CurrencyInput from 'react-currency-input';

class CreateBillComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col x2="12" sm="12" md="12" className="m-1tbem">
            <Form>
              <FormGroup>
                <Label>Name:</Label>
                <Input type="name" 
                  name="name" 
                  placeholder="Enter Bill Name" />
              </FormGroup>
              <FormGroup>
                <Label>Value:</Label>
                <CurrencyInput name="value" 
                  className="form-control" 
                  prefix="R$ " 
                  precision="2" />
              </FormGroup>
              <FormGroup>
                <Label>Type:</Label>
                <Input type="select"
                  name="select">
                  <option value="IN">Input</option>
                  <option value="OU">Output</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Category:</Label>
                <Input type="select"
                  name="select">
                  <option value="IN">Input</option>
                  <option value="OU">Output</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Button color="primary">Create</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default CreateBillComponent;
