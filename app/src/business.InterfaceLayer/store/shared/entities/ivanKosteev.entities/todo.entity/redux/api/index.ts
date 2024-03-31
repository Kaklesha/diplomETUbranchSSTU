import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface PropsAll {
	authToken: string;
	params: {
		id: any;
		image: string;
		price: number;
		name: string;
		category: string;
		desciption: string;
	};
}

const baseUrl = "https://64af9c86c60b8f941af447f7.mockapi.io/fishing";

export const fishingApi = createApi({
	reducerPath: `${reducerPaths.fishing}`,
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	tagTypes: [`${reducerPaths.fishing}TAG`],

	endpoints: (build) => ({
		getAllFishing: build.query<any, PropsAll>({
			query: ({ authToken, params }) => ({
				url: url.fishing,
				method: httpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.fishing}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
	}),
});

export const { useGetAllFishingQuery } = fishingApi;
