const config = {
  apiUrl: "https://reqres.in/api",
};

const settings = {
  dev: config,
};

const getCurrentSettings = () => {
  return settings.dev;
};

export default getCurrentSettings();
