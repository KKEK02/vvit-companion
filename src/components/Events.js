import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';

const Events = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Events
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Workshop on React</Typography>
              <Typography variant="body2">Date: 25th Dec</Typography>
              <Button variant="contained" color="primary">RSVP</Button>
              <Button variant="outlined" color="secondary">Remind Me</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Cultural Fest</Typography>
              <Typography variant="body2">Date: 1st Jan</Typography>
              <Button variant="contained" color="primary">RSVP</Button>
              <Button variant="outlined" color="secondary">Remind Me</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Hackathon</Typography>
              <Typography variant="body2">Date: 15th Jan</Typography>
              <Button variant="contained" color="primary">RSVP</Button>
              <Button variant="outlined" color="secondary">Remind Me</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Events;
