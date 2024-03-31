import React from "react"; //  { useEffect, useState }
// import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
// import { RootState } from "business.InterfaceLayer/store";
// import KosteevLayout from "user.InterfaceLayer/Layouts/IvanKosteev.layouts/Main.layout";

// import AuthModal from "../../AuthModal.page/index";

const CheckAuth = () => {
	// 	const isAuthenticated = useAppSelector(
	// 		(state: RootState) => state.auth.isAuthenticated
	// 	);
	// 	const [isModalShown, setIsModalShown] = useState(false);

	// 	useEffect(() => {
	// 		const hasModalBeenShown = localStorage.getItem("isModalShown");
	// 		setIsModalShown(!isAuthenticated && !hasModalBeenShown);
	// 	}, [isAuthenticated]);

	// 	return (
	// 		<div>
	// 			{isModalShown && <AuthModal />}
	// 			{isAuthenticated ? <KosteevLayout /> : null}
	// 		</div>
	// 	);
	// };
	return <div>CheckAuth</div>;
};
export default CheckAuth;
