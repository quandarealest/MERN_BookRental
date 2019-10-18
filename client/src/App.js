import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import store from './store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar/AppNavBar';
import Books from './components/Books/Books';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
          <Books />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
