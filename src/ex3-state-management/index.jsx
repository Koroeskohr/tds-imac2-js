import React, { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const StateManagementExercise = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.code === 'Enter') {
      setItems([...items, event.target.value]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      {
        items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )
      }
    </div>
  );
};
