import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';

import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavBar from './components/AppNavBar/AppNavBar';

import Rental from './containers/RentalsContainer/RentalsContainer';
import Books from './containers/BooksContainer/BooksContainer';
import Users from './containers/UsersContainer/UsersContainer';
require('dotenv').config();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <ToastContainer autoClose={5000} closeButton={false} />
          <AppNavBar/>
          <Container>
            <Books />
            <Users />
            <Rental />
          </Container>
      </div>
    </Provider>
  );
}

export default App;
