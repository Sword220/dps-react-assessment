import React from 'react';
import { Grid } from 'semantic-ui-react'
//import { Link } from 'react-router-dom';
import axios from 'axios'; 


 class Beers extends React.Component {
  state = { beers: [] }

  componentDidMount() {
    axios.get('/api/all_beers')
    .then( res => this.setState({ beers: res.data }))
  }

  render() {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={4} >
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={10}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
 }

 export default Beers