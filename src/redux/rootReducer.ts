import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import authreducer from "./slices/auth";

const rootPersistConfig: PersistConfig<any> = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "fastamoni-",
};

const rootReducer = combineReducers({
  auth: authreducer,
});

export { rootPersistConfig, rootReducer };
