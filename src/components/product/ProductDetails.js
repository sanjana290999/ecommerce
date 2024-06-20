import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../features/products/ProductsSlice";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import { getCartItem, postCartItem } from "../features/cart/CartSlice";
import { removeAllCartItem } from "../features/cart/CartSlice";

export default function ProductDetails() {
  const [mainImage, setMainImage] = useState("");
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetails && productDetails.mainImage) {
      setMainImage(productDetails.mainImage.url);
    }
  }, [productDetails]);

  const handleSubImageClick = (url) => {
    setMainImage(url);
  };

  const addCartItem = (productId) => {
    dispatch(postCartItem({ productId, quantity: 1 }));
    toast.success("Item added to cart");
    dispatch(getCartItem());
  };

  const buyItem = (productId) => {
    dispatch(removeAllCartItem());
    dispatch(postCartItem({ productId, quantity: 1 })).then(() => {
      navigate("/cart");
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {!isEmpty(productDetails) && (
        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch">
          {/* Main Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              className="w-full md:w-4/5 h-auto md:h-[80%] object-contain"
              src={mainImage}
              alt={productDetails.name}
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 md:ml-10 mt-8 md:mt-0">
            <p className="text-2xl font-medium">Deal Of The Week</p>
            <p className="text-3xl mt-2 text-teal-500 font-bold">
              {productDetails.name}
            </p>
            <div className="flex items-center">
              <p className="text-2xl mt-4 text-green-800">
                {productDetails.price}
              </p>
              <p className="bg-yellow-400 text-xs mt-4 px-3 ml-3">SALE</p>
            </div>
            <p className="text-2xl mt-4 text-teal-800">
              Stock: {productDetails.stock}
            </p>
            <p className="mt-4 text-lg">{productDetails.description}</p>

            {/* Buttons */}
            <div className="flex justify-start mt-5 space-x-4">
              <button
                className="bg-teal-500 hover:bg-teal-600 px-8 py-2 text-white font-bold rounded-xl"
                onClick={() => addCartItem(id)}
              >
                ADD TO CART
              </button>
              <button
                className="border-2 text-white px-8 py-2 bg-blue-900 font-bold rounded-xl hover:bg-blue-950 hover:text-white"
                onClick={() => buyItem(id)}
              >
                BUY NOW
              </button>
            </div>

            {/* Additional Details */}
            <div className="flex justify-center mt-10">
              <p className="text-lg">
                Are you a sucker for succulents? The Crassula Green Mini will be
                your dream plant kid...
              </p>
            </div>

            {/* Sub Images */}
            <div className="flex mt-4">
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
    </div>
  );
}
