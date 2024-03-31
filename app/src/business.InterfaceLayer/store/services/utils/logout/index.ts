import {
	LocalStorageMethodEnum,
	localStorageService,
} from "../../../../../general.services/utils/local-storage.service";
import httpStatuses from "../../../shared/http/httpStatuses";

const logout = (status: httpStatuses): httpStatuses => {
	if (status === httpStatuses.UNAUTHORIZED) {
		localStorageService(LocalStorageMethodEnum.REMOVE, {
			key: "role",
		});
		localStorageService(LocalStorageMethodEnum.REMOVE, {
			key: "auth",
		});
		for (let i = 0; i < localStorage.length; i++) {
			localStorageService(LocalStorageMethodEnum.REMOVE, {
				key: String(localStorage.key(i)),
			});
		}
		if (
			window.location.pathname.indexOf("/auth") !== 0 &&
			location.pathname !== "/"
		) {
			window.location.href = "/no_auth";
		}
	}

	return status;
};

export default logout;
