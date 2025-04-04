import db from './models/index.js';

export default async function authDb() {
  try {
    await db.sequelize.authenticate({ logging: false });
    console.log('db connection successful');
  } catch (e) {
    console.error('db connection failed', e);
  }
}
