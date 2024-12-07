import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Tooltip, Collapse, LinearProgress, Breadcrumbs, Link, Fab } from '@mui/material';
import { ExpandMore, School, Warning, ArrowUpward } from '@mui/icons-material';

const Attendance = () => {
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
        <Typography color="textPrimary">Attendance</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Attendance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}>
            <CardContent>
              <Tooltip title="Subject 1">
                <IconButton>
                  <School />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Subject 1</Typography>
              <Typography variant="body2">Attendance: 80%</Typography>
              <LinearProgress variant="determinate" value={80} />
              <Typography variant="body2" color="error">Low Attendance Alert</Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed attendance information...</Typography>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)' }}>
            <CardContent>
              <Tooltip title="Subject 2">
                <IconButton>
                  <School />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Subject 2</Typography>
              <Typography variant="body2">Attendance: 90%</Typography>
              <LinearProgress variant="determinate" value={90} />
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed attendance information...</Typography>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #66BB6A 30%, #B2FF59 90%)', boxShadow: '0 3px 5px 2px rgba(102, 187, 106, .3)' }}>
            <CardContent>
              <Tooltip title="Subject 3">
                <IconButton>
                  <School />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Subject 3</Typography>
              <Typography variant="body2">Attendance: 70%</Typography>
              <LinearProgress variant="determinate" value={70} />
              <Typography variant="body2" color="error">Low Attendance Alert</Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed attendance information...</Typography>
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

export default Attendance;
