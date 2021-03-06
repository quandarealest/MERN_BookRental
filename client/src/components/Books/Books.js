import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import BooksModal from './BooksModal';
export default class Books extends Component {
  componentDidMount(){
    const { getBooks } = this.props;
    getBooks();
  }

  onDeleteClick = (id) => {
    const { deleteBook } = this.props;
    deleteBook(id);
  }

  onAddItem = (newBook) => {
    const { addBook } = this.props;
    addBook(newBook);
  }

  render() {
    const { bookList = [] } = this.props;
    return (
      <>
        <BooksModal addItem={this.onAddItem} />
        <ListGroup>
          <TransitionGroup>
            {bookList.map(({_id, title, author}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.onDeleteClick(_id)}
                  >
                    &times;
                  </Button>
                  {`${author}: ${title}`}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </>
    )
  }
}
