import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SearchBar2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    browserHistory.push(`/jobs?keyword=${this.state.keyword}&location=${this.state.location}`);
    window.location.reload();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  render() {
    return(
      <div className="search-wrapper">
        <div className="search-container-2 ">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <button className="hvr-underline-from-center">search</button>
              <div className="search-input-container">
                keyword
                <input className="search-input" name="keyword" onChange={this.handleChange} placeholder="javascript"/>
              </div>
              <div className="search-input-container">
                location
                <input className="search-input" name="location" onChange={this.handleChange} placeholder="city and/or state"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar2;
