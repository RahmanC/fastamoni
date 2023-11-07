import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "api/services";

const initialState = {
  token: null,
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export default slice.reducer;

// login user
export function LoginUser(data: {}, action?: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await login(data);

    if (response.status === 200) {
      let token = response.data.token;
      AsyncStorage.setItem("token", token);
      dispatch(
        slice.actions.updateToken({
          token: token,
        })
      );
      //   action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}
