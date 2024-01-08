import React, { useState, useEffect } from "react";
import Input from "../../components/form/Input";

export default (props) => {
	const { name1, name2, label, type } = props

  return (
    <div className="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for={name1}>
        {label}
      </label>
      <div class="grid grid-cols-12 gap-2">
        <Input name={name1} type={type} className="col-span-6" />
        <Input name={name2} type={type} className="col-span-6" />
      </div>
		</div>
  )
}