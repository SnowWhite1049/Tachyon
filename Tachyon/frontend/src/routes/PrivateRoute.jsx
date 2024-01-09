import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/partials/Header";
import BottomMenu from "../components/partials/BottomMenu";

export const PrivateRoute = ({children, ...props}) => {
	const navigate = useNavigate();
	
	useEffect(()=>{
		if(!localStorage.getItem('auth')){
			navigate('/login');
		}
	}, [navigate])
  return (localStorage.getItem('auth')?
		<>
			<Header />
			<div className="py-20">
				{children}
			</div>
			<BottomMenu />
		</>:null
  )
}