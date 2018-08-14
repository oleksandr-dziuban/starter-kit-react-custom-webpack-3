import { SHOW_TIME } from './constants';

export const showTime = (date) => ({
  type: SHOW_TIME,
  payload: date,
});
