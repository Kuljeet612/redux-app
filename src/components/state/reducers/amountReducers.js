const reducer = (state=0, action) => {
    if(action.type === "deposit") {
        return state + action.payload;
    }
    else  if(action.type === "withdraw") {
        return state - action.payload;
    }
    else {
         return state;
     }
}

export default reducer;

/* Reducer is a fn that takes state and action and performs the action*/