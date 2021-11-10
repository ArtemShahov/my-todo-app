import { combineReducers } from 'redux';
import { categoriesReducer } from '../components/Categories/state/reducer';
import { modalReducer } from '../components/common/Modal/state/reducer';
import { FormReducer } from '../components/common/Form/state/reducer';

export default combineReducers({categoriesReducer, modalReducer, FormReducer});

