import React, { Component } from 'react';
import NoMatch from './NoMatch';
//import NavBar from './NavBar';
//import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
    // <Segment> style={styles.background}
      //>
        //<NavBar />
       // <Flash />
       <Segment>
        <Switch>
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

 const styles = {
   background: {
     backgroundColor: 'white',
   },
 }

export default App;
