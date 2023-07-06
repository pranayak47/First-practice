import React, { useState } from 'react';

const NumberTable = () => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const generateTable = () => {
    const tableRows = [];
    for (let i = 1; i <= number; i++) {
      tableRows.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return tableRows;
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <table>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default NumberTable;
