import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  push,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import ProfileForm from "./ProfileForm";

class CreateProfile extends React.Component {
  handleSubmit = (profile) => {
    //this.props.addProfile({ ...profile, recommendations: [], bucketList: [] });
    //this.props.history.push("/profile");

    //const profile = this.state
    const url ='http://localhost:8000/profiles';
    const options = {
      method: 'POST',
      body: JSON.stringify(profile),
      headers: {
        "Content-Type": "application/json",
      }
    };
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({

          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          bandname: "",
          bio: "",
          profilePicture: ""
          
        
        });
        this.props.addProfile(data);
        console.log(this.props)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
 
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Create My Profile</h2>
        <ProfileForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CreateProfile;
