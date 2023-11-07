import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "api/services";

const initialState = {
  token: null,
  isLoading: false,
  error: false,
  responseError: "",
  registrationSuccess: "",
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
    updateResponseError(state, action) {
      state.responseError = action.payload.responseError;
    },
    updateRegistration(state, action) {
      state.registrationSuccess = action.payload.registrationSuccess;
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

    let success = response.status === 200 && !response.data.error;

    if (success) {
      let token = response.data.token;
      AsyncStorage.setItem("token", token);
      dispatch(
        slice.actions.updateToken({
          token: token,
        })
      );
      action();
    }

    if (!success) {
      let errorMessage = response.data.error;
      dispatch(
        slice.actions.updateResponseError({
          responseError: errorMessage,
        })
      );
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

//register user
export function RegisterUser(data: {}, message: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await signUp(data);
    let success = response.status === 200 && !response.data.error;

    if (success) {
      dispatch(
        slice.actions.updateRegistration({
          registrationSuccess: message,
        })
      );
    }

    if (!success) {
      let errorMessage = response.data.error;
      dispatch(
        slice.actions.updateResponseError({
          responseError: errorMessage,
        })
      );
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

export function UpdateResponse(data: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateResponseError({
        responseError: data,
      })
    );
  };
}

export function UpdateRegistrationMessage(data: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateRegistration({
        registrationSuccess: data,
      })
    );
  };
}

export function Logout(handleNavigate: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateToken({
        token: null,
      })
    );
    handleNavigate();
  };
}
