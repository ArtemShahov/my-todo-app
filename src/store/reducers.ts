import { combineReducers } from 'redux';
import { categoriesReducer } from '../components/Categories/state/reducer';
import { modalReducer } from '../components/common/Modal/state/reducer';

export default combineReducers({categoriesReducer, modalReducer});

