import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import authReducer from "./slices/auth";
import userReducer from "./slices/users";

const rootPersistConfig: PersistConfig<any> = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "fastamoni-",
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
});

export { rootPersistConfig, rootReducer };
