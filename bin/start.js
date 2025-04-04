import startApp from '../server/app.js';
import authDb from '../server/db/db.js';
await authDb();
startApp();
