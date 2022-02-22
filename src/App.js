import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  getFetchUsers() {
    this.setState({ loading: true }, () => {
      fetch("https://retoolapi.dev/AILAer/test")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            users: result
            
          })
        )
        .catch(console.log);
    });
  }

  componentDidMount() {
    this.getFetchUsers();
  }
  render() {
    const { users, error } = this.state;
    return (
      <React.Fragment>
        <h1>All User</h1>
        {error ? <p>{error.message}</p> : null}
        {
          users.map(user => {
            const { job, name, email } = user;
            return (
              <div key={name} className="block" >
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Job: {job}</p>
                <hr />
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }
}

export default App;
