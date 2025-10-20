import React, {createContext, useReducer, useContext,} from "react";
import cartReducer,{initialState} from "./CartReducer";

const CartContext = createContext();
export const CartProvider = ({children})=>{
    const [state,dispatch]= useReducer(cartReducer,initialState);
    const addItem = (product)=>{
        dispatch({type:'ADD_ITEM', payload:product});
    };
    const removeItem = (productId)=>{
        dispatch({type: 'REMOVE_ITEM', payload:productId});
    };
    const UpdateQuantity = (id, quantity)=>{
        dispatch({type:'UPDATE_QUANTITY', payload:{id,quantity}});
    };

    const getTotalItems=()=>{
        return state.items.reduce((total,item)=>total+ item.quantity,0);
    };
    const getCartTotal=()=>{
        const total = state.items.reduce(
            (total, item)=> total + item.price*item.quantity,0
        );
        return total.toFixed(2);
    };
    const contextValue = {
        cartItems: state.items,
        addItem,
        removeItem,
        UpdateQuantity,
        getTotalItems,
        getCartTotal,
    };
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = ()=>{
    const context = useContext(CartContext);
    if(context==undefined){
        throw new Error('useCart must be used within a cartProvider');
    }
    return context;
};