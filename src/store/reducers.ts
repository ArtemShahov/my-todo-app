import { combineReducers } from 'redux';
import { categoriesReducer } from '../components/Categories/state/reducer';
import { modalReducer } from '../components/common/Modal/state/reducer';
import { FormReducer } from '../components/common/Form/state/reducer';
import { themeReducer } from '../components/common/ThemeToggler/state/reducer';

export default combineReducers({categoriesReducer, modalReducer, FormReducer, themeReducer});

