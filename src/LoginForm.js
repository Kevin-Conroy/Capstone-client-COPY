import React from "react"

class LoginForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        username: "",
        password: ""
      };
    }

    updateUsername(username) {
      this.setState({ username });
    }
  
    updatePassword(password) {
      this.setState({ password });
    }
  
    handleLogin(event) {
    const url ='http://localhost:8000/login/username/passsword';
    
    const options = {
      method: 'POST',

     

      headers: {
        "Content-Type": "application/json",
      }
    };
    fetch(url, options)
        event.preventDefault();
        if (!this.state.username || !this.state.password) {
            alert("Username & password are required");
            } else {
                fetch ({
                    method: 'POST',
                    body: JSON.stringify({
                      username: this.state.username,
                      password: this.state.password
                   }),
               })
                 
                 };
               }
         
        
     
   render() {
      return (
        <form>
          <label>Username:</label>
          <input
            type="text" 
            id="username"
            value={this.state.username}
            onChange={(event) => this.updateUsername(event.target.value)}
          />
          <br></br>
          <label>Password:</label>
          <input required
            type="text"
            id="password"
            value={this.state.password}
            onChange={(event) => this.updatePassword(event.target.value)}
          ></input>
          <br></br>
          
          <br></br>
  
          <button type="submit" onClick={this.handleLogin.bind(this)}>
            Submit
          </button>
        </form>
    );
  }
}


export default LoginForm;