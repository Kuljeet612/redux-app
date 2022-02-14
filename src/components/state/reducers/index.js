import {combineReducers} from"redux";
import amountReducer from './amountReducers';


const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;

/*This file is used to combine all the reducers created in the app*/