import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk";

export const store = createStore(reducers , {}, applyMiddleware(thunk)) //all reducers, initial state and middleware if any. thunk helps in exectuting async fns
