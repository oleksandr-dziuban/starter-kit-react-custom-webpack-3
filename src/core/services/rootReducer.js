import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { dateReducer } from '../../features/example-redux/reducer';


export default combineReducers({
  form: formReducer,
  date: dateReducer,
});
