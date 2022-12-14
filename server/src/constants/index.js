const { config } = require("dotenv");
config();

module.exports = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  CLIENT_URL: process.env.CLIENT_URL,
  SERVER_URL: process.env.SERVER_URL,
  SECRET: process.env.SECRET,
};