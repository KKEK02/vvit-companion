import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Attendance = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Attendance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subject 1</Typography>
              <Typography variant="body2">Attendance: 80%</Typography>
              <Typography variant="body2" color="error">Low Attendance Alert</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subject 2</Typography>
              <Typography variant="body2">Attendance: 90%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subject 3</Typography>
              <Typography variant="body2">Attendance: 70%</Typography>
              <Typography variant="body2" color="error">Low Attendance Alert</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Attendance;
