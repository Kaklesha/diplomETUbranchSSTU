import React, { useState, FC } from "react";
//import { useNavigate } from "react-router-dom";

import { usePostAuthMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import Media from "../../UI_KIT/Atoms/Media.Atom";
import * as S from "./styled";
import axios from "axios";
//import "./styled/style.css";

// const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
// 	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

// 	return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
// };
interface ILogInFormType {
	usePostAuthMutation: any;
}

export const LogInForm: FC<ILogInFormType> = () => {
	//const navigate = useNavigate();
	const [valueEmail, setValueEmail] = useState("emily25@gmail.com");
	const [valuePass, setValuePass] = useState("rlytoughpass");

	//const [postAuth, result] = usePostAuthMutation();
	const headers = {
		"Content-Type": "text/plain",
	};
	const onClickHandler = async () => {
		//const body = { email: valueEmail, password: valuePass };

		await axios
			.post("http://localhost:9000/api/userAuth", {
				email: `${valueEmail}`,
				password: `${valuePass}`,
			},{headers})
			.then(function (response) {
				// eslint-disable-next-line no-console
				console.log(response);
			})
			.catch(function (error) {
				// eslint-disable-next-line no-console
				console.log(error);
			});
		//await postAuth(body);
	};

	// // eslint-disable-next-line no-console
	// console.log(`isLoad ${result.isLoading}`);
	// // eslint-disable-next-line no-console
	// console.log(`isData ${result.data}`);
	// // eslint-disable-next-line no-console
	// console.dir(`isRes ${JSON.stringify(result)}`);
	// // eslint-disable-next-line no-console

	return (
		<S.container>
			<S.wrapper>
				<h4>Вход в аккаунт</h4>
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

				{/* <Button onClick={()=>window.open("/kirillKornilov/")} text="Войти" color="#29A19C" icon={false}/>
				 */}

				<Button
					onClick={() => onClickHandler()}
					text="Войти"
					color="#29A19C"
					icon={false}
				/>

				<p>
					Ещё нет аккаунта? <a href="#">Регистрация</a>
				</p>
				<S.division_box>
					<hr />
					<p>или</p>
					<hr />
				</S.division_box>
				{/* <S.media_box>
					<Media
						logo={require("../../assets/icons/twitter.png")}
						link="twitter.com"
					/>
					<Media
						logo={require("../../assets/icons/facebook.webp")}
						link="facebook.com"
					/>
				</S.media_box> */}
			</S.wrapper>
		</S.container>
	);
};

export default LogInForm;
