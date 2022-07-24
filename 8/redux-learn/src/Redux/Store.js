
import { createStore } from 'redux';
import counterReducers from './Reducers/counterReducers';
const store = createStore(counterReducers);
export default store;