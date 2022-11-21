import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("CartItems");
    if(localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // to add individual item
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product }})
    }

    // to remove individual item
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

     // to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    //to add the data in localstorage
    useEffect(() => {
        localStorage.setItem("CartItems", JSON.stringify(state.cart))
    }, [state.cart])

    return(
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };