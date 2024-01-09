import React from "react";
import { Paths } from "../../config/Paths";
import { Link } from "react-router-dom";
import { backendUrl } from "../../utils/textDisplay";

export default (props) => {
	const { name, id, image_path, index, weekday } = props
	const link = Paths.showEvent.replace(':id', id)

  return (
		<div className="py-1">
			{index == 0&&<h5 className="font-bold">{weekday}</h5>}
			<div style={{marginTop:index != 0&&27}} className="pb-2">
				<Link to={link}>
					<div className="text-center text-lg">{name}</div>
					<img src={image_path&&(backendUrl+image_path)}  
						alt="event logo" 
						className="company-logo aspect-[4/3] border border-slate-200" />
				</Link>
			</div>
		</div>
  )
}