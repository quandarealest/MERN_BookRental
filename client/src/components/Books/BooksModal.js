import React, { Component } from 'react';
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

export default class BooksModal extends Component {
  state = {
    modal: false,
    title: '',
    author: '',
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
    
    const newBook = {
      title: this.state.title,
      author: this.state.author,
    }

    addItem(newBook);
    this.toggle();
  }

  render() {
    const { modal } =this.state;
    return (
      <div>
        <Button 
        color="dark" 
        style={{marginBottom: "2rem"}}
        onClick={this.toggle}
        >
          Add Book
        </Button>
        <Modal 
        isOpen={modal}
        toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add To Book List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">
                  Title
                </Label>
                <Input 
                  type="text" 
                  name="title" 
                  id="item" 
                  placeholder="Add Title" 
                  onChange={this.onChange}
                />
                <Label for="author">
                  Author
                </Label>
                <Input 
                  type="text" 
                  name="author" 
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
