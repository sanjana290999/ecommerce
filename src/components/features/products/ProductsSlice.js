import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axios from "axios";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";

const initialState = {
  productsData: [],
  productDetails: [],
  productCategories: [],
  storedProductsData: [],
  storedProductCategories: [],
  error: "",
  isLoding: false,
};

export const getProducts = createAsyncThunk("get/products", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/ecommerce/products?limit=20`
    );

    return response.data.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const getProductDetails = createAsyncThunk(
  "get/product/details",
  async (_id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/products/${_id}`
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const getProductsByCategories = createAsyncThunk(
  "get/Products/ByCategories",
  async (_id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/ecommerce/products/category/${_id}`
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      console.log({ storedProductsData: state.storedProductsData.products });
      console.log({
        storedProductCategories: state.storedProductCategories.products,
      });
      if (!isEmpty(state.storedProductsData.products)) {
        let products = state.storedProductsData.products.filter((product) => {
          let productName = product.name.toLowerCase();
          let search = action.payload.toLowerCase();
          return productName.includes(search);
        });
        state.productsData = { ...state.productsData, products };
      }

      if (!isEmpty(state.storedProductCategories.products)) {
        let catProducts = state.storedProductCategories.products.filter(
          (product) => {
            let productName = product.name.toLowerCase();
            let search = action.payload.toLowerCase();
            return productName.includes(search);
          }
        );
        state.productCategories = {
          ...state.productCategories,
          products: catProducts,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsData = action.payload;
      state.storedProductsData = action.payload;
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.error = "";
      state.isLoding = false;
    });
    builder.addCase(getProductsByCategories.fulfilled, (state, action) => {
      state.productCategories = action.payload;
      state.storedProductCategories = action.payload;
      state.error = "";
      state.isLoding = false;
    });
    builder.addMatcher(isPending, (state, action) => {
      state.error = "";
      state.isLoding = true;
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export const { searchProducts } = productsSlice.actions;
export default productsSlice.reducer;
