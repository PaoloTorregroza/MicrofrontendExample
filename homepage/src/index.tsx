import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//@ts-ignore
window.renderHomepage = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId)
  );
}

//@ts-ignore
window.unmountHomepage = containerId => {
  //@ts-ignore
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}

if (!document.getElementById('Homepage-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}