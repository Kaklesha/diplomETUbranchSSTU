// eslint-disable-next-line import/order
import React, { FC, useState } from "react";
// import ComponentLogInForm from "user.InterfaceLayer/Components/KirillKornilov.components.bll/LogInForm.component.bll copy";
// import HeaderSign from "user.InterfaceLayer/Components/KirillKornilov.components.bll/HeaderSign.component.bll";
// import FooterSign from "user.InterfaceLayer/Components/KirillKornilov.components.bll/FooterSign.component.bll";

// eslint-disable-next-line import/order

// eslint-disable-next-line import/order
import Logo from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Logo.molecule";

import "./style.css";
import Button from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Button.molecule";
import axios from "axios";

import * as S from "./styled";

//import Component1 from "../../../Components/KirillKornilov.components.bll/Components1.component.bll";
// import { Component1 } from "test-lib";

// const headers = {
// 	"Content-Type": "text/plain",
// };

// const [valueEmail, setValueEmail] = useState("emily25@gmail.com");
// const [valuePass, setValuePass] = useState("rlytoughpass");

const onClickHandler = async (valueEmail, valuePass, valuePassTemp) => {
	//const body = { email: valueEmail, password: valuePass };

	if (valuePass !== valuePassTemp) return false;
	const headers = {
		"Content-Type": "text/plain",
	};

	await axios
		.post(
			"http://localhost:9000/api/userPostAuth",
			{
				email: `${valueEmail}`,
				password: `${valuePass}`,
			},
			{ headers }
		)
		.then(function (response) {
			// eslint-disable-next-line no-console
			console.log(response);
			// if (response.data["id"] !== 0) {
			// 	localStorage.setItem("user", JSON.stringify(response.data));
			// 	// eslint-disable-next-line no-console
			// 	console.log("good");
			// 	// eslint-disable-next-line no-console
			// 	console.log(response["id"]);
			// 	//	navigate("..", { relative: "path" });
			// 	//	window.location.reload();
			// }
		})
		.catch(function (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		});
	//await postAuth(body);
};

const RegisterPage: FC = () => {
	// eslint-disable-next-line no-console
	// console.log(Component1);

	const [valueEmail, setValueEmail] = useState("@gmail.com");
	const [valuePass, setValuePass] = useState("");
	const [valuePassTemp, setValuePassTemp] = useState("");

	return (
		<>
			<S.head>
				<Logo />
				<svg
					width="44"
					height="44"
					viewBox="0 0 44 44"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g>
						<path
							id="Vector (Stroke)"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M3.66675 22.0001C3.66675 20.9876 4.48756 20.1667 5.50008 20.1667H38.5001C39.5126 20.1667 40.3334 20.9876 40.3334 22.0001C40.3334 23.0126 39.5126 23.8334 38.5001 23.8334H5.50008C4.48756 23.8334 3.66675 23.0126 3.66675 22.0001Z"
							fill="#282846"
						/>
						<path
							id="Vector (Stroke)_2"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M3.66675 11.0001C3.66675 9.98756 4.48756 9.16675 5.50008 9.16675H38.5001C39.5126 9.16675 40.3334 9.98756 40.3334 11.0001C40.3334 12.0126 39.5126 12.8334 38.5001 12.8334H5.50008C4.48756 12.8334 3.66675 12.0126 3.66675 11.0001Z"
							fill="#282846"
						/>
						<path
							id="Vector (Stroke)_3"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M3.66675 33.0001C3.66675 31.9876 4.48756 31.1667 5.50008 31.1667H38.5001C39.5126 31.1667 40.3334 31.9876 40.3334 33.0001C40.3334 34.0126 39.5126 34.8334 38.5001 34.8334H5.50008C4.48756 34.8334 3.66675 34.0126 3.66675 33.0001Z"
							fill="#282846"
						/>
					</g>
				</svg>
			</S.head>

			<S.container>
				<S.wrapper>
					<h4>Регистрация аккаунта</h4>
					<input
						value={valueEmail}
						onChange={(e) => setValueEmail(e.target.value)}
						type="text"
						placeholder="E-mail"
					/>
					<input
						value={valuePass}
						onChange={(e) => setValuePass(e.target.value)}
						type="text"
						placeholder="Пароль"
					/>
					<input
						value={valuePassTemp}
						onChange={(e) => setValuePassTemp(e.target.value)}
						type="text"
						placeholder="Повтор пароля"
					/>

					{/* <Button onClick={()=>window.open("/kirillKornilov/")} text="Войти" color="#29A19C" icon={false}/>
					 */}

					<Button
						onClick={() => onClickHandler(valueEmail, valuePass, valuePassTemp)}
						text="Войти"
						color="#29A19C"
						icon={false}
					/>
				</S.wrapper>
			</S.container>

			<S.Footer>
				<S.Copyright>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
							fill="#282846"
						/>
					</svg>
					<p>copyright 2024</p>
				</S.Copyright>
				<div>
					<S.Footer__a href="#">Политика конфидециальности</S.Footer__a>
				</div>
			</S.Footer>
		</>
	);
};

export default RegisterPage;
