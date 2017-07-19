import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import Endpoint from "../constants/endpoint";

import 'react-datepicker/dist/react-datepicker.css';

import LoggedInHeader2 from './LoggedInHeader2';
import Interview2 from './Interview2';
import JournalJobComponent2 from './JournalJobComponent2';
import Footer2 from './Footer2';

class JournalNewInterview2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journal: {
        Interviews: [],
        Job: {
          api_id: "",
          api_num: 0,
          api_job_id: "",
          api_logo: "",
          apply_url: "",
          company_logo: "",
          company_name: "",
          company_url: "",
          date_created: "Fri Jun 30 19:25:00 UTC 2017",
          description: "",
          id: 0,
          job_type: "",
          location: "",
          title: ""
        },
        api_id: "",
        api_job_id: "",
        contact_email: "",
        contact_name: "",
        contact_phone: "",
        applied: false,
        date_applied: "",
        id: 0,
        job_id: 0,
        notes: ""
      },
      journal_id: parseInt(this.props.params.journal_id),
      interview_date: "",
      interviewer_name: "",
      interviewer_position: "",
      interviewer_email: "",
      interviewer_phone: "",
      interview_notes: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

  }

  componentDidMount() {
    axios
    .get(`${Endpoint.BASE_URL}/journals/${this.props.params.journal_id}`,{
      headers: {
        'Authorization':   window.localStorage.getItem('token')
      }
    })
    .then((response) => {
      const journalData = response.data;
      this.setState({
        journal: journalData
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
    .post(`https://tech-jobs-api.herokuapp.com/journals/${this.props.params.journal_id}/interviews`, {
      interview: this.state
    }, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then(() => {
      browserHistory.push(`/journals/${this.props.params.journal_id}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDateChange(date) {
    this.setState({
      interview_date: date
    });
  }

  // Render Yes or No depending on wheter user has applied for the job(ture) or not(false)
  renderAppliedYN() {
    if (this.state.journal.applied === true){
      return "Yes";
    } else {
      return "No";
    }
  }

  render() {
    Moment.locale('en');
    const dateApplied = this.state.journal.date_applied;
    return (
      <div className="main-wrapper">
        <LoggedInHeader2 />
        <div className="main-container">
          <div className="journal-container">
            <div className="journal-entry-container-2">
              <h2>Application Journal</h2>
              <div className="journal-entry-item">
                <div className="journal-entry-label-2">
                  applied:
                </div> {this.renderAppliedYN()}
              </div>
              <div className="journal-entry-item">
                <div className="journal-entry-label-2">
                  date:
                </div> {Moment(dateApplied).format('dddd, MMMM Do, YYYY')}
              </div>
                <h3>Application Contact <Link to={`/journals/${this.state.journal.id}/edit`}><button className="icon-button edit-button"></button></Link></h3>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    name:
                  </div>
                  <div className="journal-entry-content">
                    {this.state.journal.contact_name}
                  </div>
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    email:
                  </div>
                  <div className="journal-entry-content">
                    {this.state.journal.contact_email}
                  </div>
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    phone:
                  </div>
                  {this.state.journal.contact_phone}
                </div>
                <div className="journal-entry-item">
                  <div className="journal-entry-label-2">
                    notes:
                  </div>
                  {this.state.journal.notes}
                </div>
                <div className="bottom-border-2"/>
                { this.state.journal.Interviews.map((interview, index) => {
                  if (!interview.visited) {
                    return (
                      <Interview2
                      key={index} index={index}
                      interview={interview} />
                    );
                  } else {
                    return;
                  }
                })}
                <div className="new-interview-form">
                <h3>New Interview</h3>

                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="edit-label-2 date-input">
                    date {/*<input onBlur={this.handleChange} className="search-input journal-save-input-2 date-applied-input date-interviewed-input" name="interview_date" id="datepicker"/>*/}
                    <DatePicker selected={this.state.interview_date} onChange={this.handleDateChange} />
                  </div>
                  <div className="edit-label-2">
                    name <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_name" type="text"/>
                  </div>
                  <div className="edit-label-2">
                    position <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_position" type="text"/>
                  </div>
                  <div className="edit-label-2">
                    email <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_email" type="email" placeholder="@"/>
                  </div>
                  <div className="edit-label-2">
                    phone <input onChange={this.handleChange} className="search-input journal-save-input-2" name="interviewer_phone" type="text" placeholder="###-###-####"/>
                  </div>
                  <div className="notes-label-2">
                    notes
                  </div>
                  <div>
                   <textarea onChange={this.handleChange} name="interview_notes" type="text" placeholder="notes"/>
                  </div>
                  <div className="journal-save-2">
                    <button className="hvr-underline-from-center">save interview</button>
                  </div>
                </form>
                </div>
              </div>
              <JournalJobComponent2 job={this.state.journal.Job} />
            </div>
            <Footer2 />
        </div>
      </div>
    );
  }
}

export default JournalNewInterview2;
