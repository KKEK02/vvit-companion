import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Notices = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Notices & Announcements
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Exam Schedule</Typography>
              <Typography variant="body2">Mid-term exams start from 15th March</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Results</Typography>
              <Typography variant="body2">Semester results will be announced on 25th March</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Administrative Notifications</Typography>
              <Typography variant="body2">New library timings: 8 AM - 8 PM</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Notices;
