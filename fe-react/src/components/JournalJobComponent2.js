import React, { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

class JournalJobComponent2 extends Component {
  constructor(props) {
    super(props);

  }

  renderHowToApply() {
    if(this.props.job.api_num) {
      return (
        <div>
        <h2>To apply:</h2>

        <div className="hvr-underline-from-center" dangerouslySetInnerHTML={{__html: this.props.job.apply_url}} />
        </div>
      );
    } else {
      return (
        <div>
          <Link to={`${this.props.job.apply_url}`} target="_blank" className="hvr-underline-from-center apply-button"><img src={require('../assets/img/apply-icon.png')} height="15px"/> click here to apply</Link>
        </div>
      );
    }
  }

  formatImageUrl() {
    return this.props.job.company_logo.replace(/http/, "https");
  }

  renderCompanyLogo() {
    if(this.props.job.api_num) {
      return (
        <img className="company-logo-full" src={this.formatImageUrl()}/>
      );
    } else {
      return;
    }
  }

  render() {
    Moment.locale('en');
    const dateCreated = this.props.job.date_created;
    return (
      <div className="journal-job-container">
        <div className="journal-job-header-2">
          {this.renderCompanyLogo()}
            <h1>{this.props.job.title}<br/>
            at  {this.props.job.company_name}</h1>
            <div>
              <Link to={`${this.props.job.comcompany_url}`} target="_blank" className="hvr-underline-from-center">{this.props.job.company_url}</Link>
            </div>
            <div>
            {this.props.job.location}
            </div>
            <div>
            {this.props.job.job_type}
            </div>
            <div>
              Posted on  {Moment(dateCreated).format('dddd, MMMM DD, YYYY')} on <img src={`${this.props.job.api_logo}`} height="24px" />
            </div>
            <div className="apply-container">
              {/*<div dangerouslySetInnerHTML={{__html: this.props.job.apply_url}} />*/}
              {this.renderHowToApply()}
            </div>
          </div>
        <div dangerouslySetInnerHTML={{__html: this.props.job.description}} className="journal-description-format"/>
      </div>
    );
  }
}

export default JournalJobComponent2;
