import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Header, Container } from 'semantic-ui-react';

class Beers extends React.Component {
  state = { beers: [] };

  componentDidMount() {
    axios.get('/api/all_beers')
      .then(res => {
        this.setState({ beers: res.data })
      })
      .catch( error => {
        console.log(error.response);
    });
  }

  beers = () => {
  const { beers } = this.state
    { beers.map( b =>
    <Card key={b.id}>
      <Card.Content>
        <Card.Header>
         {b.name}
        </Card.Header>
      </Card.Content>
    </Card>
  )
}
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Beers</Header>
          <Card.Group itemsPerRow={4}>
           { this.beers() }
          </Card.Group>
        </Container>
      )
  }
}

export default Beers;