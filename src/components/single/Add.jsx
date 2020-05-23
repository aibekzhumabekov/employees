import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input } from 'reactstrap';

class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
      employee:{}
    }
  }

   onChange = (key, value) => {
    const employee = {...this.state.employee};
    employee[key] = value;
    this.setState({employee})
   }

   onSave = () => {
     this.props.addEmployee(this.state.employee);
     this.props.onClose()
   }
   onClose = () => {
     this.props.onClose()
   }
   onClear = () => {
     const employee = {first_name:'', last_name:'', email:'', city:'', state:''};
    this.setState({employee})
   }

    render(){
      const { first_name, last_name, city, state, email } = this.state.employee;
      console.log('employee',this.state.employee)
      console.log('first_name',first_name)
    return (
      <Modal isOpen={this.props.addMode} toggle={this.onClose}>
        <ModalHeader toggle={this.onClose}>Adding Employer {first_name}</ModalHeader>
        <ModalBody>
        <Col>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Name</InputGroupText>
          </InputGroupAddon>
          <Input onChange={(e)=>this.onChange('first_name',e.target.value)} value={first_name} />
      </InputGroup>
        <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Lastname</InputGroupText>
          </InputGroupAddon>
          <Input onChange={(e)=>this.onChange('last_name',e.target.value)} value={last_name} />
      </InputGroup>
      <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Email</InputGroupText>
          </InputGroupAddon>
          <Input onChange={(e)=>this.onChange('email',e.target.value)} value={email} />
      </InputGroup>
      <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>City</InputGroupText>
          </InputGroupAddon>
          <Input onChange={(e)=>this.onChange('city',e.target.value)} value={city} />
      </InputGroup>
      <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>State</InputGroupText>
          </InputGroupAddon>
          <Input onChange={(e)=>this.onChange('state',e.target.value)} value={state} />
      </InputGroup>
         
        </Col>
        </ModalBody>
        <ModalFooter>
          <Button className="float-left mr-5" color="secondary" onClick={this.onClear}>Clear</Button>{' '}
          <Button color="primary" onClick={this.onSave}>Save</Button>{' '}
          <Button color="secondary" onClick={this.onClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
    }
  }
  
  export default Add;