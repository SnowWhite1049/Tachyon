import React from "react";

const AdminInput = (props) => {
	const { name, label, type, value, handleChange, className} = props;

  return (
    <div className="mb-4">
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className={className}>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id={name}
          type={type} 
          placeholder={label}
          value={value}
          onChange={ev => handleChange(name, ev.target.value)}
        />
      </div>
		</div>
  )
};

export default AdminInput;