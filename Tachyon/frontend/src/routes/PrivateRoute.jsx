import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/partials/Header";
import BottomMenu from "../components/partials/BottomMenu";

export const PrivateRoute = ({children, ...props}) => {
  return (
		<>
			<Header />
			<div className="py-20">
				{children}
			</div>
			<BottomMenu />
		</>
  )
}