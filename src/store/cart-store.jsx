import { createContext, useReducer } from "react";

export const CartList = createContext({
    cartList: [],
    onAdd: () => { },
    onDelete: () => { },
    resetCart: () => { }
})

const cartListReducer = (curState, action) => {
    let newState = curState
    if (action.type === 'ADD_PRODUCT') {
        newState = [action.payload.product, ...curState]
    }
    else if (action.type === 'DELETE_PRODUCT') {
        newState = curState.filter((product) => product.id !== action.payload.id)
    }
    else if (action.type === 'RESET') {
        newState = action.payload.product
    }
    return newState
}

const CartListProvider = ({ children }) => {
    let [cartList, dispatchCartList] = useReducer(cartListReducer, [])

    const onAdd = (product) => {
        dispatchCartList({
            type: 'ADD_PRODUCT',
            payload: {
                product
            }
        })
    }
    const onDelete = (id) => {
        console.log(id)
        dispatchCartList({
            type: 'DELETE_PRODUCT',
            payload: {
                id
            }
        })
    }
    const resetCart = () => {
        dispatchCartList({
            type: 'RESET',
            payload: {
                product: []
            }
        })
    }


    return <CartList.Provider value={{ cartList, onAdd, onDelete, resetCart }}>{children}</CartList.Provider>
}
export default CartListProvider