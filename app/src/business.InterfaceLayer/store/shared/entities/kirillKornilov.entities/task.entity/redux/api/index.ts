import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
	//reducerPath: `${reducerPaths.todo}/api`,
	reducerPath: "goodsApi",
	tagTypes: ["Task", "Category"],
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:9000/api/",
	}),

	//tagTypes: [`${reducerPaths.todo}TAG`],

	endpoints: (build) => ({
		getGoods: build.query({
			query: () => "category/1",
		}),
		getCategories: build.query({
			query: (user_id: number) => `category/${user_id}`,

			providesTags: ["Category"],
		}),
		getTasks: build.query({
			query: ({ category_id, user_id }) => `task/${user_id}/${category_id}`,
			providesTags: ["Task"],
		}),
		addTasks: build.mutation({
			query: (body) => ({
				url: `task/${body["user_id"]}/${body["category_id"]}`,
				method: "POST",
				mode: "no-cors",
				body,
				prepareHeaders: (headers: any) => {
					headers.set("Accept", "application/json");
					headers.set("Access-Control-Allow-Origin", "*");

					return headers;
				},
			}),
			invalidatesTags: ["Task"],
		}),

		deleteTasks: build.mutation({
			query: (task_id) => ({
				url: `task/${task_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Task"],
		}),

		getObservation: build.query({
			query: ({ category_id, user_id }) =>
				`observation/${user_id}/${category_id}`,
		}),
		getFact: build.query({
			query: () => "fact",
		}),
		getActivity: build.query({
			query: ({ category_id, user_id }) => `activity/${user_id}/${category_id}`,
		}),
		getUser: build.query({
			query: (user_id) => `user/${user_id}`,
		}),

		toggleTask: build.mutation({
			query: (task_id) => ({
				url: `toggleTask/${task_id}`,
				method: "POST",
				mode: "no-cors",
			}),
			invalidatesTags: ["Task"],
		}),
		editTask: build.mutation({
			query: (body) => ({
				url: `editTask/${body["category_id"]}/${body["task_id"]}`,
				method: "POST",
				mode: "no-cors",
				body,
				prepareHeaders: (headers: any) => {
					headers.set("Access-Control-Allow-Origin", "*");

					return headers;
				},
			}),
			invalidatesTags: ["Task"],
		}),

		postCategory: build.mutation({
			query: (body) => ({
				url: `category/${body["user_id"]}`,
				method: "POST",
				mode: "no-cors",
				body,
			}),
			invalidatesTags: ["Category"],
		}),

		deleteCategory: build.mutation({
			query: (category_id) => ({
				url: `categoryDel/${category_id}`,
				method: "DELETE",
			}),

			invalidatesTags: ["Category"],
		}),
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
		// loginAuth: build.query({
		// 	query: ({ name, pwd }) => `userAuth/${name}/${category_id}`,
		// }),
		// getTodo: build.query<any, Props>({
		// 	query: ({ authToken, params }) => ({
		// 		url: url.todo,
		// 		method: httpMethods.GET,
		// 		headers: {
		// 			Authorization: `Bearer ${authToken}`,
		// 		},
		// 		params: params,
		// 		validateStatus,
		// 	}),
		// 	providesTags: [`${reducerPaths.todo}TAG`],
		// 	transformResponse: todoFromDtoServiceArray,
		// }),

		// loginYAuth: build.query({
		// 	query: (user) => ({
		// 		url: "userAuth",
		// 		method: "GET",
		// 		body: user, // Body is automatically converted to json with the correct headers
		// 	}),
		// }),
	}),
});

export const {
	useGetGoodsQuery,
	useGetCategoriesQuery,
	useGetTasksQuery,
	useGetObservationQuery,
	useGetFactQuery,
	useGetActivityQuery,
	useAddTasksMutation,
	useDeleteTasksMutation,
	useGetUserQuery,
	useToggleTaskMutation,
	useEditTaskMutation,
	usePostCategoryMutation,
	useDeleteCategoryMutation,
	usePostAuthMutation,
} = goodsApi;
