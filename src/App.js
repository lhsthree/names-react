import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserLIst from './UserList'



class App extends Component {
  state = {
    users: [],
  };

createContact = user => {
  user.numGamesPlayed = 0;
  this.setState(currState => ({
    users: [...currState.users, user],
  }));
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser users={this.state.users} onAddUser={this.createContact} />
       <UserLIst users={this.state.users} />
      </div>
    );
  }
}

export default App;