import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Marks from './components/Marks';
import Events from './components/Events';
import CourseDetails from './components/CourseDetails';
import Notices from './components/Notices';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/attendance" component={Attendance} />
          <Route path="/marks" component={Marks} />
          <Route path="/events" component={Events} />
          <Route path="/course-details" component={CourseDetails} />
          <Route path="/notices" component={Notices} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
