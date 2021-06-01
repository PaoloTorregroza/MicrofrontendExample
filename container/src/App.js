import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_TODO: todoHost,
  REACT_APP_HOMEPAGE: homepageHost
} = process.env

const Todo = () => (
  <MicroFrontend host={todoHost} name='Todo' />
);

const Homepage = () => (
  <MicroFrontend host={homepageHost} name='Homepage' />
);

const HomepageAndTodo = () => (
  <div>
    <div className="todo-container">
      <MicroFrontend host={todoHost} name='Todo' />
    </div>
    <div className='homepage-container'>
      <MicroFrontend host={homepageHost} name='Homepage' />
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={HomepageAndTodo} />
          <Route exact path='/home' component={Homepage} />
          <Route exact path='/todo' component={Todo} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
