import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SnackForm from './components/SnackForm/SnackForm';
import SnackList from './components/SnackList/SnackList';


class App extends Component {



  render() {
    return (
      <div className="App">


        <SnackForm />

        <SnackList />

      </div>
    );
  }
}

export default App;
