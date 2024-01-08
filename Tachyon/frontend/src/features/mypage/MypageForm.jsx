import React, { useState, useEffect } from "react";
import Input from "../../components/form/Input";

export default (props) => {
	const { name, label, type } = props

  return (
    <div className="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for={name}>
        {label}
      </label>
			<Input name={name} label={label} type={type} />
		</div>
  )
}