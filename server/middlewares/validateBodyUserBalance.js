import { STATUS, STATUS_MESSAGES } from '../config/consts.js';
import isUUID from '../utils/isUUID.js';

export default function validateBodyUserBalance(req, res, next) {
  try {
    const { amount } = req.body;
    const { id: userId } = req.params;

    if (!isUUID(userId) || typeof amount !== 'number' || amount === 0) {
      res.status(STATUS.INVALID_BODY).send({
        success: false,
        message: STATUS_MESSAGES.INVALID_BODY,
      });
      return;
    }

    req.customData = { ...req.customData, amount, userId };
    next();
  } catch (e) {
    next(e);
  }
}
