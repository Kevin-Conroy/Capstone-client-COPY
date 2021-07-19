import React from "react";
import { Router, withRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Welcome from "./Welcome";
import Header from "./Header";
import CreateProfile from "./CreateProfile";
import ArtistSearch from "./ArtistSearch";
import SearchCity from "./SearchCity";
import NavBar from "./NavBar";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import "./App.css";
import LoginForm from "./LoginForm"
//import profiles from "./ArtistData";

const history = createBrowserHistory();
const profiles = []

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addProfile = this.addProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

    this.state = {
     
      profiles: profiles.map((profile) => ({
        ...profile,
        recommendations: [],
        bucketList: [],
      })),
      userId: "",
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/profiles')
      .then(response => response.json())
      .then(profiles => {
        console.log(profiles);
        this.setState({ profiles })
      });
  }

  addProfile(profile) {
    this.setState({
      profiles: [...this.state.profiles, { ...profile, bucketList: [], recommendations: [] } ],
      userId: profile.id,
      bucketList: [],
      recommendations: []

    }, () => history.push("/profile/"));
  }

  updateProfile(profile) {
    console.log(profile)
    const otherProfiles = this.state.profiles.filter(
      (p) => p.id !== profile.id
      
      
    );
    console.log(this.state.profiles)
    this.setState({
      profiles: [...otherProfiles, profile],
      
    });
    console.log(this.state.profiles)
  }

  render() {
    
    const loggedInUser = this.state.profiles.find(
      (p) => p.id === this.state.userId
    );
    return (
      <main className="App">
        <div>
          <Router history={history}>
            <Header />
            <NavBar />

            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/createprofile"
              render={(props) => (
                <CreateProfile addProfile={this.addProfile} {...props} />
              )}
            />
            
            <Route 
              exact
              path="/login"
              render={() => loggedInUser ? 
              <Redirect to="/profile" /> : 
              <LoginForm />}
               

            />  
            <Route
              exact
              path="/artistsearch"
              render={(props) => (
                <ArtistSearch profiles={this.state.profiles} />
              )}
            />
            <Route
              exact
              path="/searchcity"
              render={(props) => (
                <SearchCity
                  profile={loggedInUser}
                  updateProfile={this.updateProfile}
                  addBucketListItem={this.addBucketListItem}
                />
              )}
            />
            <Route
              exact
              path="/profile/:id?"
              render={(props) => {
                const profile = this.state.profiles.find(
                  (p) => p.id === (Number(props.match.params.id) || this.state.userId),
                  
                );
                console.log(profile);
                return (
                  <Profile
                    addProfile={this.addProfile}
                    addRecommendation={this.addRecommendation}
                    addBucketListItem={this.addBucketListItem}
                    updateProfile={this.updateProfile}
                    profile={profile}
                    userId={this.state.userId}
                    recommendations={this.recommendations}
                    bucketList={this.bucketList}
                    
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/editprofile"
              render={(props) => {
                const profile = this.state.profiles.find(
                  (p) => p.id === this.state.userId
                );

                return (
                  <EditProfile
                    updateProfile={this.updateProfile}
                    profile={profile}
                    {...props}
                  />
                );
              }}
            />
          </Router>
        </div>
      </main>
    );
  }
}

export default withRouter(App);
