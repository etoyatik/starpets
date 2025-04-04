import { ERRORS, STATUS, STATUS_MESSAGES } from '../config/consts.js';

export default function errorHandler(e, req, res, next) {
  if (e.message === ERRORS.NO_MONEY) {
    res.status(STATUS.INVALID_BODY).send({
      success: false,
      message: STATUS_MESSAGES.NO_MONEY,
    });
    return;
  }
  if (e.message === ERRORS.NO_USER) {
    console.log(req.customData);
    res.status(STATUS.INVALID_BODY).send({
      success: false,
      message: STATUS_MESSAGES.INVALID_BODY,
    });
    return;
  }
  console.error(e.message);
  res
    .status(STATUS.ERROR)
    .send({ success: false, error: STATUS_MESSAGES.ERROR });
}
