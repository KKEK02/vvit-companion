import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const CourseDetails = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Course Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subject 1</Typography>
              <Typography variant="body2">Syllabus: Topic 1, Topic 2, Topic 3</Typography>
              <Typography variant="body2">Faculty: Dr. John Doe</Typography>
              <Typography variant="body2">Resources: <a href="#">Textbook</a>, <a href="#">Lecture Slides</a></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subject 2</Typography>
              <Typography variant="body2">Syllabus: Topic 1, Topic 2, Topic 3</Typography>
              <Typography variant="body2">Faculty: Dr. Jane Smith</Typography>
              <Typography variant="body2">Resources: <a href="#">Textbook</a>, <a href="#">Lecture Slides</a></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Subject 3</Typography>
              <Typography variant="body2">Syllabus: Topic 1, Topic 2, Topic 3</Typography>
              <Typography variant="body2">Faculty: Dr. Emily Johnson</Typography>
              <Typography variant="body2">Resources: <a href="#">Textbook</a>, <a href="#">Lecture Slides</a></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseDetails;
