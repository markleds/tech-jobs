import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

// import { Provider } from 'react-redux';

// import store from './store/configureStore';

import './assets/css/normalize.css';
import './assets/css/style.css';

import Splash2 from './components/Splash2';
import Splash2LogIn from './components/Splash2LogIn';
import Splash2CreateAccount from './components/Splash2CreateAccount';
import Journal2 from './components/Journal2';
import SearchResults2 from './components/SearchResults2';
import JobCardFull2 from './components/JobCardFull2';
import JournalOneJob2 from './components/JournalOneJob2';
import JournalOneJobEdit2 from './components/JournalOneJobEdit2';
import JournalNewInterview2 from './components/JournalNewInterview2';
import JournalEditInterview2 from './components/JournalEditInterview2';

const restrict = () => {
  if (!window.localStorage.getItem('token')) {
    browserHistory.push('/login');
  }
};

// <Route path="/create-account" component={SignUp} />
ReactDom.render(
  // <Provider store={store()}>
    <Router history={browserHistory}>
      <Route path="/" component={Splash2} />
      <Route path="/login" component={Splash2LogIn} />
      <Route path="/create-account" component={Splash2CreateAccount} />
      <Route path="/journals/:journal_id/interviews/new" component={JournalNewInterview2} onEnter={restrict}/>
      <Route path="/journals/:journal_id/interviews/:id" component={JournalEditInterview2} onEnter={restrict}/>
      <Route path="/journals/:journal_id/edit" component={JournalOneJobEdit2} onEnter={restrict}/>
      <Route path="/journals/:journal_id" component={JournalOneJob2} onEnter={restrict}/>
      <Route path="/journal" component={Journal2} onEnter={restrict}/>
      <Route path="/jobs/:job_id" component={JobCardFull2} onEnter={restrict}/>
      <Route path="/jobs" component={SearchResults2} onEnter={restrict}/>
    </Router>
  // </Provider>
  , document.getElementById('app')
);
