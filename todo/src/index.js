import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderTodo = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId)
  );
}

window.unmountTodo = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}

if (!document.getElementById('Todo-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}