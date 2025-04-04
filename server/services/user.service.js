import { ERRORS } from '../config/consts.js';
import db from '../db/models/index.js';

export default async function findUserAndUpdateBalance(
  userId,
  amount,
  transaction
) {
  const [affectedCount, [updatedUser]] = await db.User.update(
    {
      balance: db.sequelize.literal(`balance + ${amount}`),
    },
    {
      where: {
        id: userId,
        balance: { [db.Op.gte]: -amount },
      },
      returning: true,
      transaction,
    }
  );

  if (affectedCount === 0) {
    const userExists = await db.User.findByPk(userId, {
      transaction,
    });
    if (!userExists) throw new Error(ERRORS.NO_USER);
    throw new Error(ERRORS.NO_MONEY);
  }

  return updatedUser.balance;
}
