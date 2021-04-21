const Select = ({ label, choices }) => {

  const handleChange = e => {
    console.log('stuff')
  };

  const options = choices.map((choice, index) => {
    const key = `${choice.id}_${index}`;
    return (
      <option
        key={key}
        value={choice.value}
      >
        {choice.label}
      </option>
    );
  });

  return (
    <div>
      <label>{label}</label>
      <select>
        {options}
      </select>
    </div>
  );

};

export default Select;