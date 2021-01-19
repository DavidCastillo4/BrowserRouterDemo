//App.js
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

let Home = () => { return <h2>Home</h2> }
let About = () => { return <h2>About</h2> }

let User = (props) => {
  let id = props.match.params.id
  return (
    <h2>{id}</h2>
  )
};

let users = [
  { 'id': 1, 'name': 'David' },
  { 'id': 2, 'name': 'Maria' },
  { 'id': 3, 'name': 'Seth' },
]

export let App = () => {
  return (
    <BrowserRouter >
      <Link to='/'>Home</Link>
      <br/>
      <Link to='/about'>About</Link>

      <ul>
        {users.map((user, x) => (
          <li key={x}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
        ))}
      </ul>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/user/:id' component={User} />
      </Switch>
    </BrowserRouter>
  );
};
