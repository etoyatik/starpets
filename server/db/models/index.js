import { Op, Sequelize } from 'sequelize';
import config from '../config/config.js';
import userS from '../schemas/user.schema.js';

const sequelize = new Sequelize(config);

const db = {};

const User = sequelize.define('users', userS, {
  freezeTableName: true,
  underscored: true,
});

db.Op = Op;
db.User = User;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
