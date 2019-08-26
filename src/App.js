import React, { Component } from 'react';
import Users from './components/Users';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

 
  handleUser = u =>{
    this.setState({
      user:u
    })
  }

  render() {
    return (
      <div className="App" >
        <Navbar />
        <Main handleUser={this.handleUser} />
        {this.state.user ? <Modal user={this.state.user} handleUser={this.handleUser} /> :''}

      </div>
    );
  }
}

export default App;
