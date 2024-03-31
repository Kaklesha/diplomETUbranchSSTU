import React from "react";
import { Outlet } from "react-router-dom";

const CheckAuth = () => {
	// const { token: authTokenParams } = useParams();
	// const authTokenFromLocalStorage = checkAuth();
	// const navigate = useNavigate();
	//
	// const { status, data } = useGetUserInfoQuery(
	// 	authTokenParams ?? authTokenFromLocalStorage ?? ""
	// );
	//
	// const dispatch = useAppDispatch();
	// const auth = useAppSelector((state) => state.auth);
	// const setLogin = (data: IAuthUserState) => {
	// 	dispatch(authActions.login(data));
	// };
	//
	// useEffect(() => {
	// 	status === QueryStatus.fulfilled && setLogin(data ?? initialAuthState);
	// }, [status]);
	//
	// useEffect(() => {
	// 	authTokenParams &&
	// 		auth.id &&
	// 		navigate(
	// 			routeBuilder(getUrlByRoleService(getMainRoleService(auth.role)))
	// 		);
	// }, [auth.id]);
	//
	// return auth.id ? <Outlet /> : <div>Initialization</div>;
	return <Outlet />;
};
export default CheckAuth;
