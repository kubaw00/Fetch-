import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';

const API = 'https://randomuser.me/api/?results=1';

class App extends Component {

  state = {
     users: []
  }

  handleDataFetch = () => {
    fetch(API)
    .then(res => {
      if(res.ok){
        return res
      }
      throw new Error("Błąd!!!")
    })
    .then(res => res.json())
    .then(data => {
        const users = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(users)
        }))
  })
  .catch(err => console.log(err))
}

  render() {
    const users = this.state.users;
    return (
     <div>
       <ButtonFetchUsers click={this.handleDataFetch}/>
       {users.length>0 ? <UsersList users={users} /> : users}
     </div>
    );
  }
}

export default App;
