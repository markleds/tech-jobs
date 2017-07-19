import React, { Component } from 'react';
import Moment from 'moment';
import { Link } from 'react-router';

class Interview2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    Moment.locale('en');
    const interviewDate = this.props.interview.interview_date;
    const interviewNumber = this.props.index + 1;
    return (
      <div >
      <h3>Interview #{interviewNumber} <Link to={`/journals/${this.props.interview.journal_id}/interviews/${this.props.interview.id}`}><button className="icon-button edit-button"></button></Link></h3>
        <div className="journal-entry-item">
          <div className="journal-entry-label-2">
            date:
          </div>
          <div className="journal-entry-content">
          {Moment(interviewDate).format('dddd, MMMM Do, YYYY')}
          </div>
        </div>
        <div className="journal-entry-item">
          <div className="journal-entry-label-2">
            name:
          </div>
          <div className="journal-entry-content">
            {this.props.interview.interviewer_name}
          </div>
        </div>
        <div className="journal-entry-item">
          <div className="journal-entry-label-2">
            position:
          </div>
          <div className="journal-entry-content">
            {this.props.interview.interviewer_position}
          </div>
        </div>
        <div className="journal-entry-item">
          <div className="journal-entry-label-2">
            email:
          </div>
          <div className="journal-entry-content">
            {this.props.interview.interviewer_email}
          </div>
        </div>
        <div className="journal-entry-item">
          <div className="journal-entry-label-2">
            phone:
          </div>
          <div className="journal-entry-content">
            {this.props.interview.interviewer_phone}
          </div>
        </div>
        <div className="journal-entry-item journal-notes">
          <div className="journal-entry-label-2">
            notes:
          </div>
            {this.props.interview.interview_notes}
        </div>
        <div className="bottom-border-2"/>
      </div>
    );
  }
}

export default Interview2;
