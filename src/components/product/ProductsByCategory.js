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

const TitleShortner = ({ title }) => {
  if (title.length > 20) {
    return (
      <>
        <div className=" opacity-0 hover:opacity-100  absolute z-10 w-auto bg-gray-800 text-sm text-white p-3 rounded-lg -mt-8 -ml-3">
          {title}
        </div>
        <span>{title.slice(0, 20)}...</span>
      </>
    );
  }
  return <span>{title}</span>;
};
export default function ProductsByCategories({ name, showAllButton }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const productData = useSelector(
    (state) => state.products.productCategories.products
  );
  console.log({ productData });
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    dispatch(getProductsByCategories(categoryId));
  }, [Navigate]);
  const addCartItem = (productId) => {
    dispatch(postCartItem({ productId, quantity: 1 }));
    toast.success("Item added to cart");
    console.log(productId);
  };

  return (
    <div>
      <div className="text-4xl font-medium ml-60 ">{name}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10 sm:mx-20 lg:mx-40 mt-8">
        {!isEmpty(productData) &&
          productData.map((element) => <ProductCard product={element} />)}
      </div>
      {showAllButton && (
        <div className="flex items-center justify-center mt-10">
          <Link to="/all_products">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md font-medium transition duration-300">
              View All Products
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
