import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProps {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: RatingProps;
  title?: string;
  quantity?: number;
}

interface RatingProps {
  rate?: number;
  count?: number;
}
// const defaultVal = [
//   {
//     category: "",
//     description: "",
//     id: 0,
//     image: "",
//     price: 0,
//     rating: {
//       rate: 0,
//       count: 0,
//     },
//     title: "",
//     quantity: 0
//   },
// ];

// const initialState = [
//   {
//     category: "",
//     description: "",
//     id: 0,
//     image: "",
//     price: 0,
//     rating: {
//       rate: 0,
//       count: 0,
//     },
//     title: "",
//   },
// ] as ProductProps[];

interface SampleProps {
  cart: CartProps[];
}

const initialState = {
  cart: [],
} as SampleProps;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // reset: () => initialState,
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    getCart: (state: any, action: PayloadAction<CartProps[]>) => {
      console.log("🚀 ~ file: cart.tsx:72 ~ action:", action.payload);
      state.cart = action.payload;
    },
    addToCartFunc: (state: any, action: PayloadAction<CartProps>) => {
      if (state.cart.length > 0) {
        const checkIfExist = state.cart.findIndex(
          (data: CartProps) => data.id === action.payload.id,
        );
        if (checkIfExist >= 0) {
          state.cart[checkIfExist].quantity =
            state.cart[checkIfExist].quantity + action.payload.quantity;
        } else {
          state.cart.push(action.payload);
        }
      } else {
        state.cart.push(action.payload);
      }

      console.log("🚀 ~ file: cart.tsx:72 ~ action:", action.payload);
      // state.cart = action.payload;
    },
    addQuantityCtr: (state: any, action: PayloadAction<CartProps>) => {
      const checkIfExist = state.cart.findIndex(
        (data: CartProps) => data.id === action.payload.id,
      );
      if (checkIfExist >= 0) {
        state.cart[checkIfExist].quantity =
          state.cart[checkIfExist].quantity + 1;
      }

      // state.cart = action.payload;
    },
    subQuantityCtr: (state: any, action: PayloadAction<CartProps>) => {
      const checkIfExist = state.cart.findIndex(
        (data: CartProps) => data.id === action.payload.id,
      );
      if (checkIfExist >= 0) {
        if (state.cart[checkIfExist].quantity > 1) {
          state.cart[checkIfExist].quantity =
            state.cart[checkIfExist].quantity - 1;
        }
      }

      // state.cart = action.payload;
    },
    removeSpecificItem: (
      state: any,
      action: PayloadAction<number | undefined>,
    ) => {
      if (state.cart.length > 0) {
        const checkIfExist = state.cart.findIndex(
          (data: CartProps) => data.id === action.payload,
        );
        if (checkIfExist >= 0) {
          state.cart.splice(checkIfExist, 1);
        }
      }
    },
  },
});

export const {
  getCart,
  addToCartFunc,
  removeSpecificItem,
  addQuantityCtr,
  subQuantityCtr,
  // increment,
  // incrementByAmount,
  // decrement,
  // decrementByAmount,
  // reset,
} = cart.actions;
export default cart.reducer;
