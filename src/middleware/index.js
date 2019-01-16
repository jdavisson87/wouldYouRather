import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddlware } from 'redux';

export default applyMiddleware(
  thunk,
  logger,
)
