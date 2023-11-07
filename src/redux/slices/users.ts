import { createSlice } from "@reduxjs/toolkit";
import { createUser, getUsers, patchUser } from "api/services";

const initialState = {
  users: [],
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
  },
});

export default slice.reducer;

// fetch user
export function FetchUser(page: string) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await getUsers(page);

    if (response.status === 200) {
      let users = response.data.data;

      dispatch(
        slice.actions.updateUsers({
          users: users,
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

// create user
export function CreateUser(data: {}, action?: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await createUser(data);
    console.log("create", response);
    if (response.status === 201) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// update user
export function UpdateUser(id: string, data: {}, action?: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response: any = await patchUser(id, data);

    if (response.status === 200) {
      action();
    }

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}
