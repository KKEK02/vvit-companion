import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Tooltip, Collapse, Breadcrumbs, Link, Fab } from '@mui/material';
import { Person, School, ExpandMore, ArrowUpward } from '@mui/icons-material';

const Profile = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '20px' }}>
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Profile</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}>
            <CardContent>
              <Tooltip title="Name">
                <IconButton>
                  <Person />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Name</Typography>
              <Typography variant="body2">John Doe</Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed profile information...</Typography>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)' }}>
            <CardContent>
              <Tooltip title="Student ID">
                <IconButton>
                  <School />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Student ID</Typography>
              <Typography variant="body2">123456789</Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed student ID information...</Typography>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #66BB6A 30%, #B2FF59 90%)', boxShadow: '0 3px 5px 2px rgba(102, 187, 106, .3)' }}>
            <CardContent>
              <Tooltip title="VVIT Portal">
                <IconButton>
                  <School />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">VVIT Portal</Typography>
              <Typography variant="body2">
                <a href="https://vvit.ac.in" target="_blank" rel="noopener noreferrer">
                  Visit VVIT Portal
                </a>
              </Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed VVIT portal information...</Typography>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Fab color="primary" aria-label="back to top" onClick={handleBackToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <ArrowUpward />
      </Fab>
    </div>
  );
};

export default Profile;
