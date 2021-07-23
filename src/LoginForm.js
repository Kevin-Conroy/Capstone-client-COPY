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
  
    async handleLogin(event) {
       
    if (!this.state.username || !this.state.password) {
              alert("Username & password are required");
              } else {
                if(this.state.username.length<6 || this.state.password.length<6){
                  alert("Username & Password must be atleast 6 character")
                }else{
                  const url ='http://localhost:8000/login/username/passsword';
                  const options = {
                      method: 'POST',
                         
                
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body:JSON.stringify({
                        username:this.state.username,
                        password:this.state.password,
                      })
                    };
                    try{
                   var token= await fetch(url, options).then(a=>a.json())
                  // console.log(token.id,"asdf");
                  if(token == '200'|| token=="400")
                  alert("Wrong username or password... please check!!!");
                  else{
                   sessionStorage.setItem("tokenses", token.token);
                   sessionStorage.setItem("loginid", token.id);
                  }
                    }catch(e){
                      alert (e);
                    }
                }
              }




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