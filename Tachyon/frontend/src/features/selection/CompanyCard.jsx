import React from "react";
import { Paths } from "../../config/Paths";
import { Link } from "react-router-dom";
import { backendUrl } from "../../utils/textDisplay";

export default (props) => {
	const { name, id, logo_path } = props
	const link = Paths.showCompany.replace(':id', id)

  return (
		<div className="py-2">
			<Link to={link}>
				<img src={logo_path&&(backendUrl+logo_path)}  alt="company logo" className="company-logo aspect-[3/2] rounded-lg" />
				<p className="text-black mt-2">{name}</p>
			</Link>
		</div>
  )
}