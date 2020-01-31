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
        <Route exact path='/' component={Welcome}></Route>
        <Route exact path='/home/#who-am-i' component={WhoAmI}></Route>
        <Route exact path='/home/#portfolio' component={Portfolio}></Route>
        <Route exact path='/home/#reachMe' component={Contact}></Route>
        
        
      </Switch>
    )
  }
}

export default withRouter(Routes)