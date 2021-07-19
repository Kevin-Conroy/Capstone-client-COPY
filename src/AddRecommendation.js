import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AddRecommendation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      state: "",
      website: "",
      priceRange: "",
    };
  }



  addRecommendation = () => {
    //this.props.addRecommendation();
    
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.city || !this.state.state) {
      alert("Name, city, and state are required");
  }
const { name, city, state, website, priceRange } = this.state;
const recommendation = this.state
const url ='https://food-on-tour-api.herokuapp.com/addrecommendation';
const options = {
  method: 'POST',
  body: JSON.stringify(recommendation),
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

      name: "",
      city: "",
      state: "",
      website: "",
      priceRange: ""
      
    
    });
    
    this.props.handleSubmit(data);
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });
  this.props.addRecommendation(this.state);
}
    
  

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>My Recommendations</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Restaurant Name"
            onChange={this.handleInput("name")}
          />
          <br></br>
          <input
            id="city"
            type="text"
            placeholder="City"
            onChange={this.handleInput("city")}
          />
          <br></br>
          <input
            id="state"
            type="text"
            placeholder="State"
            onChange={this.handleInput("state")}
          />
          <br></br>
          <input
            id="website"
            type="text"
            placeholder="Website"
            onChange={this.handleInput("website")}
          />
          <br></br>
          <input
            id="price"
            type="text"
            placeholder="Price Range ($ - $$$$)"
            onChange={this.handleInput("price")}
          />
          <br></br>
          <button type="submit">
            Add Recommendation
          </button>
        </form>
      </div>
    );
    }
}

export default AddRecommendation;
