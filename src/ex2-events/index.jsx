import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const EventsExercise = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  const handleInputFocus = () => {
    console.log('Focus !');
  };

  const handleInputKeyDown = (event) => {
    // If enter is pressed
    if (event.code === 'Enter') {
      console.log('Envoyé !');
    }
  };

  const handleSelectChange = (event) => {
    console.log(event.target);
  };

  const handleButtonClick = () => {
    console.log('Clic');
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleInputKeyDown}
      />
      <select onChange={handleSelectChange}>
        <option value="grapefruit">Pamplemousse</option>
        <option value="lime">Citron vert</option>
        <option value="coconut">Noix de coco</option>
        <option value="mango">Mangue</option>
      </select>
      <button type="button" onClick={handleButtonClick}>Click me</button>
    </div>
  );
};
