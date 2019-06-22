import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box';

import ButtonAppBar from './components/AppNavBar';
import SimpleCard from './components/Card';

function App() {
  return (

    <React.Fragment>
        
          <ButtonAppBar />
          <br />
          <br />


          <Box color="text.primary" clone>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
  
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
              
                <Button variant="contained" color="info">
                  Hello World
                </Button>

                <Button variant="contained" color="success">
                  Hello World
                </Button>
              
                <Button variant="contained" color="danger">
                  Hello World
                </Button>
            </Grid>
          </Box>

          <br />
          <br />

        <React.Fragment>
        <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                  <SimpleCard />
                  <SimpleCard />
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                  <SimpleCard />
                  <SimpleCard />
              </Grid>
        </React.Fragment>

        </React.Fragment>
  );
}

export default App;
