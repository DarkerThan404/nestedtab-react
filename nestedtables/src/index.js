import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HierarchyTable from './HierarchyTable';
import './index.css';
import jsonData from './data.json';

function App() {

  const [data, setData] = useState(jsonData);

  const handleDelete = (itemToDelete) => {
    console.log("Item to be deleted", itemToDelete);
    console.log("before", data)
    const updatedData = recursiveDelete(data, itemToDelete);
    console.log("after", updatedData)
    setData([...updatedData]);
  }

  const recursiveDelete = (items, itemToDelete) => {
    return items.filter(item => {
      if (item === itemToDelete) {
        return false;
      } else if (item.children && Object.keys(item.children).length > 0) {
        if(item.children.has_nemesis) {
          item.children.has_nemesis.records = recursiveDelete(item.children.has_nemesis.records, itemToDelete);
          if (item.children.has_nemesis.records.length === 0) {
            delete item.children.has_nemesis;
          }
        }

        if(item.children.has_secrete) {
          item.children.has_secrete.records = recursiveDelete(item.children.has_secrete.records, itemToDelete);
          if (item.children.has_secrete.records.length === 0) {
            delete item.children.has_secrete;
          }
        }
      }
      return true;
    });
  };
    return (
    <div>
        <h1>Hierarchical Table</h1>
        <HierarchyTable data={data} onDelete={handleDelete} />
    </div>
    );
  }
  
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);
