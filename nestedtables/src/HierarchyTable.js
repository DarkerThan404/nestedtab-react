import React from 'react';

function HierarchyTable({ data }) {
    const keys = data[0] ? Object.keys(data[0].data) : [];
    console.log(keys)
  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
            <tr key={item.data.ID}>
                {keys.map((key) => (
                    <td key={key}>{item.data[key]}</td>
                ))}
            </tr>
        ))}
        
      </tbody>
    </table>
  );
}

export default HierarchyTable;