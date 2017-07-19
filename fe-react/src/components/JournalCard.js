import React, { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

class JournalCard extends Component {
  constructor(props) {
    super(props);
  }

  renderDateApplied() {
    const dateApplied = this.props.journal.date_applied;
    if(this.props.journal.applied === true) {
      return (
        <div className="jc-date-applied-2">
          Applied {Moment(dateApplied).format('MMMM Do, YYYY')}
        </div>
      );
    } else {
      return;
    }
  }

  // Render Copany's logo if Company has a logo
  renderCompanyLogo() {
    if (this.props.journal.Job.has_company_logo) {
      return <img className="jc-company-logo-thumb" src={this.props.journal.Job.company_logo} />;
    } else {
      return;
    }
  }

  render() {
    Moment.locale('en');
    return (
      <div className="jc-container-2 animated bounceInUp">
        {this.renderCompanyLogo()}
        <h2>{this.props.journal.Job.title}</h2>
        <h2>at  {this.props.journal.Job.company_name}</h2>
        <h3>
          {this.props.journal.Job.location}<br/>
          {this.props.journal.Job.job_type}
        </h3>
        {this.renderDateApplied()}
        <Link to={`/journals/${this.props.journal.id}`}><button className="icon-button view-button"/></Link>
      </div>
    );
  }
}

export default JournalCard;
