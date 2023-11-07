module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@components/*": ["src/components/*"],
            "@screens/*": ["src/screens/*"],
            "@elements/*": ["src/elements/*"],
            "@configs/*": ["src/configs/*"],
            "@navigation/*": ["src/navigation/*"],
            "@redux/*": ["src/redux/*"],
            "@type/*": ["src/type/*"],
          },
        },
      ],
    ],
  };
};
