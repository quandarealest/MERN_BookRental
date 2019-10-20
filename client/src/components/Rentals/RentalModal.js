import React, { Component } from 'react';
import { info as ToastInfo } from '../Toast/Toast';
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

export default class RentalModal extends Component {
  state = {
    modal: false,
    book: null,
    user: null,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
    if(this.state.modal === false) {
      this.setState({
        book: null,
        user: null,
      })
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmitRental = (e) => {
    const { addItem } = this.props;
    e.preventDefault();
    const { book, user } = this.state;
    if(!book || !user || !(book && user)){
      ToastInfo("Nothing to render");
    } else {
      const newRental = {bookId: book, userId: user};
      addItem(newRental);
      this.toggle();
    }
  }

  render() {
    const { userList, bookList } = this.props;
    const { modal } = this.state;
    return (
      <div>
      <Button 
      color="dark" 
      style={{marginBottom: "2rem", marginTop: "2rem"}}
      onClick={this.toggle}
      >
        Add new rent
      </Button>
      <Modal 
      isOpen={modal}
      toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>
          Add new Rental
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmitRental}>
            <FormGroup>
              <Label for="user">
                User
              </Label>
              <Input 
                type="select" 
                name="user" 
                id="item" 
                onChange={this.onChange}
              >
                <option selected="selected" disabled="disabled">Pick a User!</option>
                {userList.map(({_id, name, age}) => (
                  <option value={_id} key={_id}>{`${name}: ${age}`}</option>
                ))}
              </Input>
              <Label for="book">
                Book
              </Label>
              <Input 
                type="select" 
                name="book" 
                id="item" 
                onChange={this.onChange}
              >
                <option selected="selected" disabled="disabled">Pick a Book!</option>
                {bookList.map(({_id, title, author}) => (
                  <option value={_id} key={_id}>{`${title}: ${author}`}</option>
                ))}
              </Input>
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
