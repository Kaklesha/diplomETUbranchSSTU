import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { logOut, setCredentials } from "../slice/authSlice";


const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:9000",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;

		// If we have a token set in state, let's assume that we should be passing it.
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.error?.originalStatus === 403) {
		console.warn("sending refresh token");
		//send refresh token to get new access token
		const refreshResult = await baseQuery("/refresh", api, extraOptions);
		console.warn(refreshResult);
		if (refreshResult?.data) {
			const user = api.getState().auth.user;
			//store the new token
			api.dispatch(setCredentials(...refreshResult.data, user));
			//retry th original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}

	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({}),
});
