import React, { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const item = action.payload;
      const existing = state.items.find((x) => x.id === item.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.id === item.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      }
      return { ...state, items: [...state.items, { ...item, qty: 1 }] };
    }

    case "INC": {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)),
      };
    }

    case "DEC": {
      const id = action.payload;
      return {
        ...state,
        items: state.items
          .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
          .filter((x) => x.qty > 0),
      };
    }

    case "REMOVE": {
      const id = action.payload;
      return { ...state, items: state.items.filter((x) => x.id !== id) };
    }

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalQty = useMemo(
    () => state.items.reduce((sum, x) => sum + x.qty, 0),
    [state.items]
  );

  const totalPrice = useMemo(
    () => state.items.reduce((sum, x) => sum + x.price * x.qty, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      totalQty,
      totalPrice,
      addToCart: (p) => dispatch({ type: "ADD", payload: p }),
      inc: (id) => dispatch({ type: "INC", payload: id }),
      dec: (id) => dispatch({ type: "DEC", payload: id }),
      remove: (id) => dispatch({ type: "REMOVE", payload: id }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state.items, totalQty, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};