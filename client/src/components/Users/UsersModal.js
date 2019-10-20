import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class UsersModal extends Component {
  state = {
    modal: false,
    name: '',
    age: '',
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit = (e) => {
    const { addItem } = this.props;
    e.preventDefault();
    
    const newUser = {
      name: this.state.name,
      age: this.state.age,
    }

    addItem(newUser);
    this.toggle();
  }

  render() {
    const { modal } =this.state;
    return (
      <div>
        <Button 
        color="dark" 
        style={{marginBottom: "2rem", marginTop: "2rem"}}
        onClick={this.toggle}
        >
          Add User
        </Button>
        <Modal 
        isOpen={modal}
        toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add To User List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">
                  Name
                </Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="item" 
                  placeholder="Add Title" 
                  onChange={this.onChange}
                />
                <Label for="age">
                  Age
                </Label>
                <Input 
                  type="text" 
                  name="age" 
                  id="item" 
                  placeholder="Add Author" 
                  onChange={this.onChange}
                />
                <Button color="dark" style={{marginTop: '2rem'}} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
