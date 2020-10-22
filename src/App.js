import React from 'react';
import './index.css';
import Login from './Login'
import HomeContainer from './HomeContainer'
import New from './New'
import Show from './Show'
import Edit from './Edit'
import NoMatch from './NoMatch'
import {Switch, Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/new' component={New} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/show/:id' component={Show} />
        <Route path='/' component={HomeContainer} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
