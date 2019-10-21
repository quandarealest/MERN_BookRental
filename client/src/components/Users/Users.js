import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import UsersModal from './UsersModal';

export default class Users extends Component {
  componentDidMount(){
    const { getUserList } = this.props;
    getUserList();
  }

  onAddItem = (newUser) => {
    const { addUser } = this.props;
    addUser(newUser);
  }

  onDeleteClick = (id) => {
    const { deleteUser } = this.props;
    deleteUser(id);
  }

  onSort = (id) => {
    const { sortByUser } = this.props;
    sortByUser(id);
  }

  render() {
    const { userList = [] } = this.props;
    return (
      <>
        <UsersModal addItem={this.onAddItem} />
        <ListGroup>
          <TransitionGroup>
            {userList.map(({_id, name, age}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade" onClick={() => this.onSort(_id)}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.onDeleteClick(_id)}
                  >
                    &times;
                  </Button>
                  {`${name}: ${age}`}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </>
    )
  }
}
