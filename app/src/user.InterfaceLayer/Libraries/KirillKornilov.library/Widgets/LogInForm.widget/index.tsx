// eslint-disable-next-line import/order
import { useState, FC } from "react";
//import { useNavigate } from "react-router-dom";

//import { usePostAuthMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";

import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import * as S from "./styled";
//import "./styled/style.css";

// const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
// 	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

// 	return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
// };
interface ILogInFormType {
	usePostAuthMutation: any;
}

export const LogInForm: FC<ILogInFormType> = () => {
	const navigate: NavigateFunction = useNavigate();
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
			.post(
				"http://localhost:9000/api/userAuth",
				{
					email: `${valueEmail}`,
					password: `${valuePass}`,
				},
				{ headers }
			)
			.then(function (response) {
				// eslint-disable-next-line no-console
				console.log(response);
				if (response.data["id"] !== 0) {
					localStorage.setItem("user", JSON.stringify(response.data));
					// eslint-disable-next-line no-console
					console.log("good");
					// eslint-disable-next-line no-console
					console.log(response["id"]);
				navigate("..", { relative: "path" });
				window.location.reload();
				}
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
					Ещё нет аккаунта? <Link to="/kirillKornilov/register">регистрация / Sign Up</Link>
				</p>
			
			</S.wrapper>
		</S.container>
	);
};

export default LogInForm;
