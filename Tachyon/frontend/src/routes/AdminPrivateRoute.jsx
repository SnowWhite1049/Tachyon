import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHeader from "../components/partials/AdminHeader";

export const AdminPrivateRoute = ({ children }) => {
	return (
		<>
			<AdminHeader />
			{children}
		</>
	)
}