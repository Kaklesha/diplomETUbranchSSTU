import { createSlice } from "@reduxjs/toolkit";

// interface AuthUser {
// 	id: string;
// 	username: string;
// }

// interface AuthState {
// 	isAuthenticated: boolean;
// 	user: AuthUser | null;
// }

// const initialState: AuthState = {
// 	isAuthenticated: false,
// 	user: null,
// };

const authSlice = createSlice({
	name: "auth",
	initialState: {user:null , token:null},
	reducers: {
		// login(state, action: PayloadAction<AuthUser>) {
		// 	state.isAuthenticated = true;
		// 	state.user = action.payload;
		// },
		// logout(state) {
		// 	state.isAuthenticated = false;
		// 	state.user = null;
		// },
		setCredentials:(state, action)=>{
			const {user, accessToken} = action.payload;
			state.user=user;
			state.token=accessToken;
		},
		logOut:(state)=>{
			
			state.user=null;
			state.token=null;
		}
	},
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
