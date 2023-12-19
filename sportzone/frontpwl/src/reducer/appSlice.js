import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");

let isAdmin = false;
// isAdmin = token?jwtDecode(token).role : null

const userSlice = createSlice({
  name: "pwl",
  initialState: {
    accessToken: token ?? null,
    isAdmin: true,
    cartItems: [],
  },
  reducers: {
    login: (state, action) => {
      const x = jwtDecode(action.payload.accessToken);
      state.isAdmin = x.role;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      localStorage.clear();
      state.role = null;
      state.accessToken = null;
    },
    cart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    addcart: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
  },
});

export const { login, logout, cart, addcart } = userSlice.actions;

export const selectUser = (state) => state.pwl.isAdmin;
export const selectToken = (state) => state.pwl.accessToken;
export const selectCart = (state) => state.pwl.cartItems;

export default userSlice.reducer;
