// cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProduct = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
  
        if (existingProduct) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
  
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  