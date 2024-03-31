import React from "react";
import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { login } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/authSlice";

const LoginPage = () => {
	const dispatch = useAppDispatch();

	const handleLogin = () => {
		const userData = {
			id: "123",
			username: "ivan",
		};

		dispatch(login(userData));
	};

	return (
		<div>
			<h2>Login Page</h2>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default LoginPage;
