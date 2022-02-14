export const depositMoney = (amount) => {
    return (dispatch) => {     //takes in a method and returns that method (dispatch)
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {     //takes in a method and returns that method (dispatch)
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}