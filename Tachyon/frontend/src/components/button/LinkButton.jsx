import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

export default (props) => {
	const { link, title } = props

  return (
    <Link to={link}>
      <div className="flex justify-end pe-5 text-sm text-primary float-right">
        {title}
        <ChevronDoubleRightIcon className="w-4 h-5 ps-1" />
      </div>
    </Link>
  )
}