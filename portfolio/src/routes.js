import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import WhoAmI from './whoAmI';
import Welcome from './welcome';
import Contact from './reachMe';
import Portfolio from './portfolio'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/portfolio' component={Welcome}></Route>
        <Route exact path='/portfolio/#portfolio' component={Portfolio}></Route>
        <Route exact path='/portfolio/#whoAmI' component={WhoAmI}></Route>
        <Route exact path='/portfolio/#reachMe' component={Contact}></Route>
        
        
      </Switch>
    )
  }
}

export default withRouter(Routes)