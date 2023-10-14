import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jsonData from './data.json';

function App() {
    return (
      <div>
        <h1>Hello Wolrd</h1>
      </div>
    );
  }
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
