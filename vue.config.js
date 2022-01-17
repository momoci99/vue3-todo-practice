// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require("dotenv-webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: "./.env.local",
      }),
    ],
  },
};
