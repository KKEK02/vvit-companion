import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Tooltip, Collapse, LinearProgress, Breadcrumbs, Link, Fab } from '@mui/material';
import { ExpandMore, School, Grade, ArrowUpward } from '@mui/icons-material';
import { Bar } from 'react-chartjs-2';

const Marks = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '20px' }}>
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Marks</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        Marks
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}>
            <CardContent>
              <Tooltip title="Semester 1">
                <IconButton>
                  <Grade />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Semester 1</Typography>
              <Typography variant="body2">Grade: 65</Typography>
              <LinearProgress variant="determinate" value={65} />
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed grades information...</Typography>
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
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)' }}>
            <CardContent>
              <Tooltip title="Semester 2">
                <IconButton>
                  <Grade />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Semester 2</Typography>
              <Typography variant="body2">Grade: 59</Typography>
              <LinearProgress variant="determinate" value={59} />
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed grades information...</Typography>
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
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #66BB6A 30%, #B2FF59 90%)', boxShadow: '0 3px 5px 2px rgba(102, 187, 106, .3)' }}>
            <CardContent>
              <Tooltip title="Semester 3">
                <IconButton>
                  <Grade />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Semester 3</Typography>
              <Typography variant="body2">Grade: 80</Typography>
              <LinearProgress variant="determinate" value={80} />
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed grades information...</Typography>
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
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ background: 'linear-gradient(45deg, #FFEB3B 30%, #FFC107 90%)', boxShadow: '0 3px 5px 2px rgba(255, 235, 59, .3)' }}>
            <CardContent>
              <Tooltip title="Semester 4">
                <IconButton>
                  <Grade />
                </IconButton>
              </Tooltip>
              <Typography variant="h6">Semester 4</Typography>
              <Typography variant="body2">Grade: 81</Typography>
              <LinearProgress variant="determinate" value={81} />
              <Tooltip title="More details">
                <IconButton onClick={handleExpandClick}>
                  <ExpandMore />
                </IconButton>
              </Tooltip>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography variant="body2">Detailed grades information...</Typography>
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

export default Marks;
