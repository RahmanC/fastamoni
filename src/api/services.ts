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

export const patchUser = (id: string, data: {}) => {
  return client.patch(`/users/${id}`, data);
};
