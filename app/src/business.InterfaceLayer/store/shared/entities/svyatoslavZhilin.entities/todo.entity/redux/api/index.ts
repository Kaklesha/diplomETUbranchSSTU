import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface Props {
	authToken: string;
	params: { id: string };
}

export const todoApi = createApi({
	reducerPath: `${reducerPaths.todo}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	tagTypes: [`${reducerPaths.todo}TAG`],

	endpoints: (build) => ({
		getTodo: build.query<any, Props>({
			query: ({ authToken, params }) => ({
				url: url.todo,
				method: httpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.todo}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
	}),
});

export const { useGetTodoQuery } = todoApi;