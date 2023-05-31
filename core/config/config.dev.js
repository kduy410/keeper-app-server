import path from "path"

const config = {};

config.DB_HOST = process.env.DB_HOST || 'localhost';
config.DB_PORT = process.env.DB_PORT || '27017';
config.DB_NAME = process.env.DB_NAME || 'notes';
config.SERVER_PORT = process.env.SERVER_PORT || 3000;

export default config;