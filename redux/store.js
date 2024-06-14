import { createStore, combineReducers } from 'redux';
import countReducers from './reducers/countReducers';
import noteReducers from './reducers/noteReducers';
const rootReducer = combineReducers({
    count: countReducers,
    notes:noteReducers
})
export const store = createStore(rootReducer);