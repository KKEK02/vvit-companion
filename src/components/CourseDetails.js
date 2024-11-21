import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Tooltip, Collapse } from '@mui/material';
import { ExpandMore, School } from '@mui/icons-material';

const CourseDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Course Details
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
              <Typography variant="body2">Syllabus: Topic 1, Topic 2, Topic 3</Typography>
              <Typography variant="body2">Faculty: Dr. John Doe</Typography>
              <Typography variant="body2">Resources: <a href="#">Textbook</a>, <a href="#">Lecture Slides</a></Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed course information...</Typography>
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
              <Typography variant="body2">Syllabus: Topic 1, Topic 2, Topic 3</Typography>
              <Typography variant="body2">Faculty: Dr. Jane Smith</Typography>
              <Typography variant="body2">Resources: <a href="#">Textbook</a>, <a href="#">Lecture Slides</a></Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed course information...</Typography>
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
              <Typography variant="body2">Syllabus: Topic 1, Topic 2, Topic 3</Typography>
              <Typography variant="body2">Faculty: Dr. Emily Johnson</Typography>
              <Typography variant="body2">Resources: <a href="#">Textbook</a>, <a href="#">Lecture Slides</a></Typography>
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed course information...</Typography>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseDetails;
