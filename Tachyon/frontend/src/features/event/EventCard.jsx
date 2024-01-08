import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Account from "../../assets/images/account.png"
import { Paths } from "../../config/Paths";

export default (props) => {
	const { name, id } = props
	const link = Paths.showEvent.replace(':id', id)

	return (
		<Link to={link} className="mx-5 mb-5 bg-white shadow-md flex">
			<img src={Account} alt="" className="p-5 h-32" />
			<div className="my-5 w-3/5">
				<div className="text-xs text-gray-400">デロイトトーマツコンサルティング</div>
				<div className="font-bold text-primary text-base break-words whitespace-pre-wrap">{name}{name}{name}{name}{name}{name}{name}{name}</div>
				<div className="text-xs text-gray-400 mb-1">72/100</div>
				<div className="text-xs text-primary text-base float-right">12月15日提出</div>
			</div>
		</Link>
	)
}