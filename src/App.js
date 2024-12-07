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
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, TextField, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const drawer = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        style={{ margin: '10px' }}
      />
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
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            VVIT Companion
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', sm: 'block' } }}>Dashboard</Button>
          <Button color="inherit" component={Link} to="/attendance" sx={{ display: { xs: 'none', sm: 'block' } }}>Attendance</Button>
          <Button color="inherit" component={Link} to="/marks" sx={{ display: { xs: 'none', sm: 'block' } }}>Marks</Button>
          <Button color="inherit" component={Link} to="/events" sx={{ display: { xs: 'none', sm: 'block' } }}>Events</Button>
          <Button color="inherit" component={Link} to="/course-details" sx={{ display: { xs: 'none', sm: 'block' } }}>Course Details</Button>
          <Button color="inherit" component={Link} to="/notices" sx={{ display: { xs: 'none', sm: 'block' } }}>Notices</Button>
          <Button color="inherit" component={Link} to="/profile" sx={{ display: { xs: 'none', sm: 'block' } }}>Profile</Button>
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
