import client from "./client";

export const login = (data: {}) => {
  return client.post("/login", data);
};

export const signUp = (data: {}) => {
  return client.post("/register", data);
};

export const getUsers = (page: string) => {
  return client.get(`/users?page=${page}`);
};
