import React, { useState } from 'react';
import './index.css';

function HierarchyTable({ data , onDelete}) {
  console.log(data);
    const [showChildren, setShowChildren] = useState(data.map(() => false));

    const toggleChildren = (index) => {
        const updatedShowChildren = [...showChildren]; 
        updatedShowChildren[index] = !updatedShowChildren[index]; 
        setShowChildren(updatedShowChildren);
      };

      const handleDeleteClick = (itemToDelete) => {
        console.log("Which item is being deleted",itemToDelete);
        onDelete(itemToDelete); 
      }
    

    const keys = data[0] ? Object.keys(data[0].data) : [];
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
            <React.Fragment key={`${item.data.ID}-${item.data["Beer consumption (l/y)"]}`}>
              {console.log(`${item.data.ID}-${item.data["Beer consumption (l/y)"]}`)}
            <tr key={`${item.data.ID}-${item.data["Beer consumption (l/y)"]}`}>
                <td>
                    {Object.keys(item.children).length > 0 ? (
                        <button onClick={()=>toggleChildren(index)}>
                            {showChildren[index] ? '▼' : '▶'}
                        </button>
                    ) : null}
                </td>
                
                {keys.map((key) => (
                    <td key={key}>{item.data[key]}</td>
                ))}
                <td>
                  <button onClick={() => handleDeleteClick(item)}>Delete</button>
                </td>
            </tr>
            {showChildren[index] && item.children.has_nemesis && item.children.has_nemesis.records && (
            <tr>
                <td colSpan={keys.length + 1}>
                <HierarchyTable data={item.children.has_nemesis.records} onDelete={onDelete}/>
                </td>
            </tr>
            )}
            {showChildren[index] && item.children.has_secrete && item.children.has_secrete.records && (
            <tr>
                <td colSpan={keys.length + 1}>
                <HierarchyTable data={item.children.has_secrete.records} onDelete={onDelete}/>
                </td>
            </tr>
            )}
            </React.Fragment>
            
        ))}
      </tbody>
    </table>
  );
}

export default HierarchyTable;