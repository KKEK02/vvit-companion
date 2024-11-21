import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Marks from './components/Marks';
import Events from './components/Events';
import CourseDetails from './components/CourseDetails';
import Notices from './components/Notices';
import Profile from './components/Profile';
import './App.css';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/attendance">
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button component={Link} to="/marks">
          <ListItemText primary="Marks" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/course-details">
          <ListItemText primary="Course Details" />
        </ListItem>
        <ListItem button component={Link} to="/notices">
          <ListItemText primary="Notices" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            VVIT Companion
          </Typography>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/attendance">Attendance</Button>
          <Button color="inherit" component={Link} to="/marks">Marks</Button>
          <Button color="inherit" component={Link} to="/events">Events</Button>
          <Button color="inherit" component={Link} to="/course-details">Course Details</Button>
          <Button color="inherit" component={Link} to="/notices">Notices</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/events" element={<Events />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
