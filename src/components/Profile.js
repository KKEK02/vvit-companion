import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Profile = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Name</Typography>
              <Typography variant="body2">John Doe</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Student ID</Typography>
              <Typography variant="body2">123456789</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">VVIT Portal</Typography>
              <Typography variant="body2">
                <a href="https://vvit.ac.in" target="_blank" rel="noopener noreferrer">
                  Visit VVIT Portal
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
