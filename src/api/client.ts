import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApisauceInstance, create } from "apisauce";
import settings from "configs/settings";

const defaultApiUrl = settings.apiUrl;

const client: ApisauceInstance = create({
  baseURL: defaultApiUrl,
  timeout: 10000,
});

client.axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default client;
