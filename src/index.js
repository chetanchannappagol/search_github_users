import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serveDev from './serveDev';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serveDev()
