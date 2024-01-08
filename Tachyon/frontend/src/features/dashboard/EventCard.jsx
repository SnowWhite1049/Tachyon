import React, { useState, useEffect } from "react";
import Company from "../../assets/images/company.png";
import { Paths } from "../../config/Paths";
import { Link } from "react-router-dom";

export default (props) => {
	const { name, id } = props
	const link = Paths.showEvent.replace(':id', id)

  return (
    <Link to={link}>
			<div className="text-lg">{name}</div>
			<div className="text-center font-bold">{name}</div>
			<img src={Company} alt="" className="company-logo" />
		</Link>
  )
}