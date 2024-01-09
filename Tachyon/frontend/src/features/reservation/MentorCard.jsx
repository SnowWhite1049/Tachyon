import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../config/Paths";
import Account from './../../assets/images/account.png';

export default (props) => {
	const { id ,first_name, last_name, interview_salary } = props;
  const link = Paths.showMentor.replace(':id', id);

  return (
    <Link to={link}>
			<img src={Account} alt="" className="px-8 pt-5" />
      <div className="text-center py-2 text-primary font-bold">{last_name} {first_name}</div>
      <div className="text-center text-primary pb-3">面談単価￥{interview_salary}円</div>
		</Link>
  )
}