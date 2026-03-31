import { DataTypes, Model} from '@sequelize/core';
import type { CreationOptional } from '@sequelize/core';

import sequelize from "../config/db.ts"

export interface UserAttributes {
  username: string;
  email: string;
  passwordHash: string;
}


class User extends Model<UserAttributes, UserAttributes> {
  public id!: CreationOptional<number>;
  public username!: string;
  public email!: string;
  public passwordHash!: string;
}

User.init({
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  modelName: 'User',
});

export default User;
