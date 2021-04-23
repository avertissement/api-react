import React from 'react';

export default function Select({ label, choices, bookTypeChange, printTypeChange }) {

  const options = choices.map((choice, index) => {
    const key = `${choice.id}_${index}`;
    return (
      <option key={key} value={choice.value}>
        {choice.label}
      </option>
    );
  });

  const changeHandler = (e) => {
    var selected = e.target.value;
    var inQuestion = label;
    if(inQuestion === "Book Type") {
      bookTypeChange(selected)
    } else {
      printTypeChange(selected)
    };
  };

  return (
    <div>
      <label>{label}: </label>
      <select onChange={e => changeHandler(e)}>
        {options}
      </select>
    </div>
  );

};