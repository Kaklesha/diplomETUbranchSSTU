import httpStatuses from "../../../shared/http/httpStatuses";
import logout from "../logout";

const validateStatus = (response: any, result: any) => {
	logout(response.status as httpStatuses);

	return result;
};

export default validateStatus;
