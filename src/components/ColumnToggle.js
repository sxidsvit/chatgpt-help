import React from 'react';

export const ColumnToggle = (props) => {
  const onChange = (e) => {
    const { name, checked } = e.target;
    props.onColumnToggle(name, checked);
  };

  return (
    <div className="toggle-columns">
      {Object.keys(props.toggles).map((toggle, index) => (
        <div key={index}>
          <label htmlFor={toggle}>{toggle}</label>
          <input
            id={toggle}
            name={toggle}
            type="checkbox"
            checked={props.toggles[toggle]}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};
