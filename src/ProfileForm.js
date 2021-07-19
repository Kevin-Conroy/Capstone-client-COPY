import React from "react";
import {
  BrowserRouter,
  Redirect
} from "react-router-dom";

class ProfileForm extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = props.profile || {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      bandname: "",
      bio: "",
      profilePicture: "",

    };
  }

  updateFirstName(firstName) {
    this.setState({ firstName });
  }

  updateLastName(lastName) {
    this.setState({ lastName });
  }

  updateUsername(userName) {
    this.setState({ userName });
  }

  updatePassword(password) {
    this.setState({ password });
  }

  updateBandName(bandname) {
    this.setState({ bandname });
  }

  updateBio(bio) {
    this.setState({ bio });
  }

  updateProfilePicture(profilePicture) {
    this.setState({ profilePicture });
  }

  handleSubmit(event) {
      event.preventDefault();
      if (!this.state.firstName || !this.state.lastName) {
          alert("First & last name are required");
          }
          else {
            this.props.handleSubmit(this.state)
          }
          
    }

  render() {
    return (
      <form>
        <label>First name:</label>
        <input
          type="text" 
          id="firstname"
          value={this.state.firstName}
          onChange={(event) => this.updateFirstName(event.target.value)}
        />
        <br></br>
        <label>Last name:</label>
        <input required
          type="text"
          id="lastname"
          value={this.state.lastName}
          onChange={(event) => this.updateLastName(event.target.value)}
        ></input>
        <br></br>
        <label>Username:</label>
        <input required
          type="text"
          id="username"
          value={this.state.userName}
          onChange={(event) => this.updateUsername(event.target.value)}
        ></input>
        <br></br>
        <label>Profile Pic (Please provide URL):</label>
        <input
          type="text"
          id="profilePic"
          value={this.state.profilePicture}
          onChange={(event) => this.updateProfilePicture(event.target.value)}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={this.state.password}
          onChange={(event) => this.updatePassword(event.target.value)}
        ></input>
        <br></br>
        <label>Your band(s):</label>
        <input
          type="text"
          id="bandname"
          value={this.state.bandname}
          onChange={(event) => this.updateBandName(event.target.value)}
        ></input>
        <br></br>
        <label>Bio:</label>
        <input
          type="text"
          id="bio"
          value={this.state.bio}
          onChange={(event) => this.updateBio(event.target.value)}
        ></input>
        <br></br>

        <button type="submit" onClick={this.handleSubmit.bind(this)}>
          Submit
        </button>
      </form>
    );
  }
}

export default ProfileForm;
