import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Header, Container } from 'semantic-ui-react';

class Breweries extends React.Component {
  state = { breweries: [] };

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        this.setState({ breweries: res.data })
      })
      .catch( error => {
        console.log(error.response);
    });
  }

  breweries = () => {
    const { breweries } = this.state
      { breweries.map( brew =>
        <Card key={brew.id}>
          <Card.Content>
            <Card.Header>
              {brew.name}
            </Card.Header>
          </Card.Content>
        </Card>
      )}
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Breweries</Header>
          <Card.Group itemsPerRow={4}>
          </Card.Group>
        </Container>
      )
  }
}

export default Breweries;