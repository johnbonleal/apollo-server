import dotenv from 'dotenv';

dotenv.config();

const configs = (() => ({
  app: {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT
  },
  mongo: {
    name: process.env.DB_NAME,
    db_port: process.env.DB_PORT,
    host: process.env.DB_HOST
  }
}))();

export default configs;