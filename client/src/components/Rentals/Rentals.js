import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

import RentalModal from './RentalModal';

export default class Rentals extends Component {
  componentDidMount(){
    const { getRentals } = this.props;
    getRentals();
  }

  onAddNewRental = (newRental) => {
    const { addRental } = this.props;
    addRental(newRental);
  }

  onDeleteClick = (id) => {
    const { deleteRental } = this.props;
    deleteRental(id);
  }

  renderCustomRentalList = ({ userList, bookList, rentalList }) => {
    let modifyRentalList = [];
    const { sort } = this.props;
    rentalList.forEach(rental => {
      let newRental = {};
      newRental = { ...rental }; 
      userList.forEach(user => {
        if (rental.userId === user._id) {
          newRental = {
            ...newRental,
            name: user.name,
            age: user.age
          }
        }
      });

      if(newRental.name) {
        bookList.forEach(book => {
          if (rental.bookId === book._id) {
            newRental = { 
              ...newRental, 
              title: book.title, 
              author: book.author
            }
          }
        });

        if(newRental.title) {
          modifyRentalList = [...modifyRentalList, newRental]
        }
      }
    });
    if(sort !== '') {
      modifyRentalList = modifyRentalList.filter(item => item.userId === sort);
    }
    return modifyRentalList
  }

  refresh = () => {
    const { sortByUser } = this.props;
    sortByUser('');
  }

  render() {
    const { userList = [], bookList = [], rentalList = [] } = this.props; 
    let customRentalList = [];
    if(Object.keys(rentalList).length !== 0 && Object.keys(userList).length !== 0 && Object.keys(bookList).length !== 0 ) {
      customRentalList = this.renderCustomRentalList({ userList, bookList, rentalList });
    }
    return (
      <>
        <RentalModal addItem={this.onAddNewRental} userList={userList} bookList={bookList} />
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Renter
              </th>
              <th>
                Book
              </th>
              <th>
                Expire Date
              </th>
              <th>
              <Button 
                color="dark" 
                onClick={this.refresh}
              >
                Refresh
              </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            { customRentalList.map((item, index) => (
              <tr key={index}>
                <th scope="row">
                  {index + 1}
                </th>
                <td>
                  {item.name}
                </td>
                <td>
                  {`${item.title}: ${item.author}`}
                </td>
                <td>
                  I dunno
                </td>
                <td>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => this.onDeleteClick(item._id)}
                  >
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }
}
