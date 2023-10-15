import React from 'react';
import ReactDOM from 'react-dom';
import HierarchyTable from './HierarchyTable';
import './index.css';
import jsonData from './data.json';

function App() {
    return (
    <div>
        <h1>Hierarchical Table</h1>
        <HierarchyTable data={jsonData} />
    </div>
    );
  }
  
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);
