import React, { useState, useEffect } from "react";

export default (props) => {
	const {name, label, type, className, value, handleChange} = props;

	return (
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
	)
}
