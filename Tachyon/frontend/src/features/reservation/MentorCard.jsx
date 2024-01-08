import React, { useState, useEffect } from "react";
import Account from './../../assets/images/account.png';

export default (props) => {
	const { first_name, last_name, interview_salary } = props

  return (
    <div className="bg-white shadow-md">
			<img src={Account} alt="" className="px-8 pt-5" />
      <div className="text-center py-2 text-primary font-bold">{last_name} {first_name}</div>
      <div className="text-center text-primary pb-3">面談単価￥{interview_salary}円</div>
		</div>
  )
}