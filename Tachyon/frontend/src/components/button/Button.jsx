import * as React from 'react';

const Button = (props) => {
	const { title, bgColor, bgColorHover, className, onClick } = props

	return (
		<button
			className={`${className ? className : "py-1 px-4 rounded-full text-xs"} ${bgColor} hover:${bgColorHover} text-white font-bold`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default Button;