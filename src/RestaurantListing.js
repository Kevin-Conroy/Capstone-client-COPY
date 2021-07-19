import React from "react";
import "./App.css";
import { Redirect } from "react-router-dom";

class RestaurantListing extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBucketListItem(this.props.restaurant);
  };

  render() {
    return (
      <main className="box">
        <div>
          <h3>Name: {this.props.restaurant.name}</h3>
          <h5>City: {this.props.restaurant.city}</h5>
          <h5>State: {this.props.restaurant.state}</h5>
          <h5>
            {this.props.restaurant.website && 
            <a href={this.props.restaurant.website} target="_blank">
              Go to their site
            </a>}
          </h5>
          {this.props.restaurant.price && 
          <h5>Price Range: {this.props.restaurant.price}</h5>}
          {!!this.props.loggedInUser && (
            <button type="button" onClick={this.handleSubmit}>
              Add to my bucketlist
            </button>
          )}
        </div>
      </main>
    );
  }
}

export default RestaurantListing;

/*

          */
