import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

const Marks = () => {
  const data = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
    datasets: [
      {
        label: 'Grades',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81]
      }
    ]
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Marks
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Semester 1</Typography>
              <Typography variant="body2">Grade: 65</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Semester 2</Typography>
              <Typography variant="body2">Grade: 59</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Semester 3</Typography>
              <Typography variant="body2">Grade: 80</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Semester 4</Typography>
              <Typography variant="body2">Grade: 81</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Bar
        data={data}
        options={{
          title:{
            display:true,
            text:'Semester-wise Grades',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
};

export default Marks;
