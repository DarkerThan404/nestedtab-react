import React, { useState } from 'react';

function HierarchyTable({ data }) {
    const [showChildren, setShowChildren] = useState(data.map(() => false));

    const toggleChildren = (index) => {
        const updatedShowChildren = [...showChildren]; 
        updatedShowChildren[index] = !updatedShowChildren[index]; 
        setShowChildren(updatedShowChildren);
      };

    const keys = data[0] ? Object.keys(data[0].data) : [];
  return (
    <table>
      <thead>
        <tr>
            <th></th>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
            <React.Fragment key={item.data.ID}>
            <tr key={item.data.ID}>
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
            </tr>
            {showChildren[index] && item.children.has_nemesis && item.children.has_nemesis.records && (
            <tr>
                <td colSpan={keys.length + 1}>
                <HierarchyTable data={item.children.has_nemesis.records}/>
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