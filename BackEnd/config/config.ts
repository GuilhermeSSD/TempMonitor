import dotenv from 'dotenv';
dotenv.config();

class config 
{
  static PORT = process.env.PORT;
  static PASS = process.env.PASS;
  static DATABASE = process.env.DATABASE;
  static USER = process.env.USER;
  static DB_PORT = process.env.DB_PORT;
  static DB_PATH = process.env.DB_PATH;
  static JWT_KEY = process.env.JWT_KEY || "Chave";
  static JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
}

export default config