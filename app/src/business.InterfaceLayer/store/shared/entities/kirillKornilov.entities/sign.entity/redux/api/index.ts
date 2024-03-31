import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signApi = createApi({
	//reducerPath: `${reducerPaths.todo}/api`,
	reducerPath: "signApi",

	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:9000/api/",
	}),

	//tagTypes: [`${reducerPaths.todo}TAG`],

	endpoints: (build) => ({
		

		postAuth: build.mutation({
			query: (body) => ({
				url: "userAuth",
				method: "POST",
				mode: "no-cors",
				body,
				//responseType:"json",
			}),
//	router.HandleFunc("/api/userAuth", PostAuth).Methods("POST", "OPTIONS")

		}),
	}),
});

export const {
	usePostAuthMutation,
} = signApi;
