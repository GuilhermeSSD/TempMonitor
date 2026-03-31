import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import config from './config.ts';

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: config.DATABASE,
  user: config.USER,
  password: config.PASS,
  host: config.DB_PATH,
  port: Number(config.DB_PORT),
});

sequelize.authenticate()
  .then(() => console.log('Conexão com MySQL bem-sucedida!'))
  .catch(err => console.error('Erro de conexão:', err));

export default sequelize