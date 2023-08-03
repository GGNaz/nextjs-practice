import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductProps {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: RatingProps;
  title?: string;
}

interface RatingProps {
  rate?: number;
  count?: number;
}
const defaultVal = [
  {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: "",
  },
];

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
  product: ProductProps;
}

const initialState = {
  product: defaultVal,
} as SampleProps;

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: () => initialState,
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    getAllProducts: (state: any, action: PayloadAction<ProductProps[]>) => {
      state.product = action.payload;
    },
  },
});

export const {
  getAllProducts,
  // increment,
  // incrementByAmount,
  // decrement,
  // decrementByAmount,
  reset,
} = products.actions;
export default products.reducer;
