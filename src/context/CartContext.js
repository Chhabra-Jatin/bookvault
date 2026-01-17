import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);


    function addToCart(product) {
        const item = state.cartList.find(i => i.id === product.id);

        let updatedList;

        if (item) {
            updatedList = state.cartList.map(cartItem =>
            cartItem.id === product.id
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            );
        } else {
            updatedList = [...state.cartList, { ...product, qty: 1 }];
        }

        const updatedTotal = updatedList.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );

        dispatch({
            type: "ADD_TO_CART",
            payload: {
            products: updatedList,
            total: updatedTotal
            }
        });
    }



    function removeFromCart(product) {
        const item = state.cartList.find(i => i.id === product.id);
        if (!item) return;

        let updatedList;

        if (item.qty > 1) {
            updatedList = state.cartList.map(cartItem =>
            cartItem.id === product.id
                ? { ...cartItem, qty: cartItem.qty - 1 }
                : cartItem
            );
        } else {
            updatedList = state.cartList.filter(
            item => item.id !== product.id
            );
        }

        const updatedTotal = updatedList.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
            products: updatedList,
            total: updatedTotal
            }
        });
    }


    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
