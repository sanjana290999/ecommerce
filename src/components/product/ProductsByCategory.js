import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategories,
} from "../features/products/ProductsSlice";
import { postCartItem } from "../features/cart/CartSlice";
import { toast } from "react-toastify";
import { ProductCard } from "./Products";
import Loader from "../loader/Loader";

const TitleShortner = ({ title }) => {
  if (title.length > 20) {
    return (
      <div className="relative">
        <div className="opacity-0 hover:opacity-100 absolute z-10 w-auto bg-gray-800 text-sm text-white p-3 rounded-lg -mt-8 -ml-3">
          {title}
        </div>
        <span>{title.slice(0, 20)}...</span>
      </div>
    );
  }
  return <span>{title}</span>;
};

export default function ProductsByCategories({ name, showAllButton }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector(
    (state) => state.products.productCategories.products
  );
  const isLoading = useSelector((state) => state.products.isLoding);
  console.log({ isLoading });
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getProductsByCategories(categoryId));
  }, [dispatch, categoryId]);

  if (isLoading) {
    return <Loader />;
  }

  const addCartItem = (productId) => {
    dispatch(postCartItem({ productId, quantity: 1 }));
    toast.success("Item added to cart");
  };

  return (
    <div className="bg-gray-200 p-5 sm:px-10 md:px-16 lg:px-24 xl:px-48 2xl:px-72">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center sm:text-left mb-5">
        {name}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!isEmpty(productData) &&
          productData.map((element) => (
            <ProductCard key={element.id} product={element} />
          ))}
      </div>
      {showAllButton && (
        <div className="flex justify-center mt-5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => navigate("/all-products")}
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
}
