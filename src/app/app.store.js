import { 
    createStore, 
    applyMiddleware, 
    compose, 
    combineReducers
 } from 'redux';
import thunk from 'redux-thunk';

import { menuReducer } from '../navigate/sidebar/menu.reducer';

const initState = {};
const middleware = [thunk];

// 拆分reducer
export const appReducer = combineReducers({
    menuReducer
});

// 全局Store
export const appStore = createStore(
    appReducer,
    initState,
    // compose(
    //     applyMiddleware(...middleware),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);