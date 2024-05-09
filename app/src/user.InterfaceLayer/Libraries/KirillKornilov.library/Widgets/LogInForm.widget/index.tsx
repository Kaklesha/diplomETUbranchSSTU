import React, { useEffect, useRef, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/auth.entity/redux/slice/authSlice";
import { useLoginMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/auth.entity/redux/slice/authApiSlice";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import Media from "../../UI_KIT/Atoms/Media.Atom";
import * as S from "./styled";
import { AxiosError } from "axios";
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
	const userRef = useRef<HTMLInputElement>(null);
	const errRef = useRef<HTMLInputElement>(null);
	const [user, setUser] = useState("emily25@gmail.com");
	const [pwd, setPwd] = useState("rlytoughpass");
	const [errMsg, setErrMsg] = useState("");
	const navigate = useNavigate();

	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		userRef.current.focus();
	}, []);
	useEffect(() => {
		setUser("");
	}, [user, pwd]);

	const handlerSubmit = async (e) => {
		e.preventDefault();
		try {
			const userData = await login({ user, pwd }).unwrap();
			dispatch(setCredentials({ ...userData, user }));
			setUser("");
			setPwd("");
			navigate("/sign");
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				// switch (err) {
				// 	case err.response?.status === 400:
				// 		setErrMsg("No Server Response");
				// 		break;

				// 	default:
				// 		break;
				// }

				if (!err?.response) {
					setErrMsg("No Server Response");
				} else if (err.response?.status === 400) {
					setErrMsg("Missing user or password");
				} else if (err.response?.status === 401) {
					setErrMsg("Unauthorzed");
				} else {
					setErrMsg("SingUn Failed");
				}
				errRef.current.focus();
			}
		}
	};
	// const [postAuth, result] = usePostAuthMutation();

	// const onClickHandler = async () => {
	// 	const body = { email: valueEmail, password: valuePass };
	// 	await postAuth(body);
	// };

	// // eslint-disable-next-line no-console
	// console.log(`isLoad ${result.isLoading}`);
	// // eslint-disable-next-line no-console
	// console.log(`isData ${result.data}`);
	// // eslint-disable-next-line no-console
	// console.log(result.error);

	return (
		<S.container>
			<S.wrapper>
				<h4>Вход в аккаунт</h4>
				<input
					value={user}
					onChange={(e) => setUser(e.target.value)}
					type="text"
					placeholder="E-mail"
				/>
				<input
					value={pwd}
					onChange={(e) => setPwd(e.target.value)}
					type="text"
					placeholder="Пароль"
				/>

				{/* <Button onClick={()=>window.open("/kirillKornilov/")} text="Войти" color="#29A19C" icon={false}/>
				 */}

				<Button
					//onClick={() => onClickHandler()}
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
				<S.media_box>
					<Media
						logo={require("../../assets/icons/twitter.png")}
						link="twitter.com"
					/>
					<Media
						logo={require("../../assets/icons/facebook.webp")}
						link="facebook.com"
					/>
				</S.media_box>
			</S.wrapper>
		</S.container>
	);
};

export default LogInForm;
