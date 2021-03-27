import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Services from './containers/Services/Services';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" component={Services}/>
        </Switch>
    )
  }
}

export default App;
