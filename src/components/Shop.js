import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);  //this holds all the action creators
  const balance = useSelector(state => state.amount);
  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
        {/* Wihtout using bindActionCreators */}
        {/* <button className="btn btn-primary mx-2" onClick={()=> {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
         Update Balance
         <button className="btn btn-primary mx-2" onClick={()=> {dispatch(actionCreators.depositMoney(100))}}>+</button> */}

           <button className="btn btn-primary mx-2" onClick={() => {(withdrawMoney(100))}}>-</button>
         Update Balance: {balance}
         <button className="btn btn-primary mx-2" onClick={() => {(depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop