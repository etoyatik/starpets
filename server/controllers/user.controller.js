import { STATUS, STATUS_MESSAGES } from '../config/consts.js';
import db from '../db/models/index.js';
import updateUserBalance from '../services/user.service.js';

/** @type {import('express').Handler} */
async function updateBalance(req, res, next) {
  const transaction = await db.sequelize.transaction();
  try {
    const { amount, userId } = req.customData;
    const newBalance = await updateUserBalance(userId, amount, transaction);
    res.status(STATUS.SUCCESS).send({
      success: true,
      data: {
        balance: newBalance,
      },
    });
    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
}

const userC = {
  updateBalance,
};

export default userC;
