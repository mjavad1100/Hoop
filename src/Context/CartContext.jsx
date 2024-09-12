import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../Help/Helper";
const initialState = {
    selectedItems: [],
    itemConter: 0,
    total: 0,
    chekOut: false,

};
const reducer = (state, actions) => {
    console.log(actions)
    switch (actions.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find((item) => item.id === actions.payload.id)) {
                state.selectedItems.push({ ...actions.payload, quantity: 1 });
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                chekOut: false,

            }
        default:
            throw new Error("Invalid Action!");
    }
};

const CartContext = createContext();




function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
const useCart = () => {
    const { state, dispatch } =
        useContext(CartContext);
    return [state, dispatch];
};
export default CartProvider;
export { useCart };
