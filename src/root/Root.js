import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import App from '../App'

function Root() {
  return <div>
    <h1>Petful</h1>
    <App/>
  </div>
}

export default Root
