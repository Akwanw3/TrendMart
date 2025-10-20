export const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
        return { ...state, items: newItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...payload, quantity: 1 }],
        };
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== payload);
      return { ...state, items: newItems };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = payload;
      const newItems = state.items
        .map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, items: newItems };
    }

    default:
      return state;
  }
};

export default cartReducer;