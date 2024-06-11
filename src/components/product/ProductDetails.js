import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../features/products/ProductsSlice";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import { getCartItem, postCartItem } from "../features/cart/CartSlice";
// import { useRoutes } from "react-router-dom";
export default function ProductDetails() {
  // const [productDetails, setProductDetails] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  console.log({ productDetails });

  const { id } = useParams();
  console.log({ id });
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);
  useEffect(() => {
    if (productDetails && productDetails.mainImage) {
      setMainImage(productDetails.mainImage.url);
    }
  }, [productDetails]);
  const handleSubImageClick = (url) => [setMainImage(url)];

  const addCartItem = (productId) => {
    dispatch(postCartItem({ productId, quantity: 1 }));
    toast.success("Item added to cart");
    dispatch(getCartItem());
  };
  console.log(productDetails);
  return (
    <>
      {!isEmpty(productDetails) && (
        <div className="flex mx-40">
          <div class="w-[50%] flex justify-end ml-16 mt-16 ">
            <img class=" w-4/5 h-[80%] pr-10" src={mainImage} alt="kdsdnksl" />
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col mt-14">
              <p className="text-2xl font-medium"> Deal Of The Week</p>
              <p className="text-3xl mt-2  text-teal-500 font-bold">
                {productDetails.name}
              </p>
              <div className="flex">
                <p className=" justify-start mt-4 text-2xl  text-green-800">
                  {productDetails.price}
                </p>
                <p className=" bg-yellow-400 text-xs mt-4 px-3 pt-2 ml-3">
                  SALE
                </p>
              </div>
              <div className="flex">
                <p className=" justify-start mt-4 text-2xl  text-teal-800">
                  Stock {productDetails.stock}
                </p>
              </div>
              <div>
                <p className=" justify-start mt-4 text-lg  text-black">
                  {productDetails.description}
                </p>
              </div>
              {/* <div>
                <p className=" justify-start mt-4 text-lg  text-black">
                  {productDetails.category}
                </p>
              </div> */}
              {/*  */}
              <div className="flex justify-start items-center space-x-4 mt-5">
                <button
                  className="bg-teal-500 hover:bg-teal-600 px-8 py-2 text-white font-bold rounded-xl"
                  type="button"
                  onClick={() => addCartItem(id)}
                >
                  ADD TO CART
                </button>
                <button
                  className="border-2 text-white px-8 py-2 bg-blue-900 font-bold rounded-xl hover:bg-blue-950 hover:text-white"
                  type="button"
                >
                  BUY NOW
                </button>
              </div>

              <div className="flex justify-center mt-10">
                <p className="text-lg  ">
                  Are you a sucker for succulents? The Crassula Green Mini will
                  be your dream plant kid. One of the easiest houseplants to
                  look after, the Crassula Green Mini boasts a lush foliage
                  which beautifies any room. Also considered lucky as per Feng
                  Shui for its coin like round plump leaves, so go on, bring
                  some green home, the luck just tags along for free.
                </p>
              </div>
              <p className="mt-4 text-lg underline p-1">view images --</p>
            </div>
            <div className="flex  mt-2">
              {productDetails.subImages &&
                productDetails.subImages.map((image) => (
                  <img
                    key={image._id}
                    src={image.url}
                    alt="subimage"
                    className="w-16 h-16 mx-2 border border-gray-300 cursor-pointer"
                    onClick={() => handleSubImageClick(image.url)}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
}
