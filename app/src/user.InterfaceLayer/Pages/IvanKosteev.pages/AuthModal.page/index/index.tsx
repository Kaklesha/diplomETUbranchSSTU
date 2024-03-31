import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { login } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/authSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!username || !password) {
			setError("Пожалуйста, введите имя пользователя и пароль.");

			return;
		}

		const userData = {
			id: "123",
			username: "ivan",
		};

		dispatch(login(userData));
		localStorage.setItem("isModalShown", "true");
		navigate("/"); // Перенаправление на главную страницу после входа
	};

	return (
		<div>
			<h2>Login</h2>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default AuthModal;
