import axios from "axios";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../features/products/ProductsSlice";
import { postCartItem, removeAllCartItem } from "../features/cart/CartSlice";
import { toast } from "react-toastify";
import { getCartItem } from "../features/cart/CartSlice";
import { FaHeart } from "react-icons/fa";
import { addwishlist } from "../features/wishlist/WishlistSlice";

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

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.whishlistData);
  const wishlistItemIds = isEmpty(wishlistItems)
    ? []
    : wishlistItems.map((item) => item._id);

  const isInWishlist = wishlistItemIds.includes(product._id);

  const buyItem = (productId) => {
    dispatch(removeAllCartItem());
    dispatch(postCartItem({ productId, quantity: 1 })).then(() => {
      navigate("/cart");
    });
  };

  const addCartItem = (productId) => {
    dispatch(postCartItem({ productId, quantity: 1 })).then(() => {
      toast.success("Item added to cart");
      dispatch(getCartItem());
    });
  };

  const addToWishlist = (product) => {
    dispatch(addwishlist(product));
    toast.success("added to Whishlist");
  };

  return (
    <div className="mx-2 shadow-md overflow-hidden transform transition duration-300 hover:scale-105 relative">
      <Link to={`/product-details/${product._id}`}>
        <img
          className="object-cover w-full h-60"
          src={product.mainImage.url}
          alt="Product"
        />
      </Link>
      <div className="absolute top-2 right-2 ">
        <button
          className={` ${isInWishlist ? "text-red-600" : "text-gray-700"} `}
          onClick={() => addToWishlist(product)}
        >
          <FaHeart className="w-6 h-6" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          <TitleShortner title={product.name} />
        </h3>
        <p className="text-gray-600 mb-2">&#x20B9;{product.price}</p>
        <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
        <div className=" flex justify-center ">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 md:px-30 px-16 rounded-md"
            onClick={() => addCartItem(product._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Products({ name, showAllButton }) {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state) => state.products.productsData.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="text-4xl font-medium text-center mt-5">{name}</div>

      {/* New Arrivals Section */}
      <div className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:mx-10 md:mx-10 lg:mx-0">
          {!isEmpty(productData) &&
            productData
              .slice(0, 10)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>

      {/* Limited Edition Collection Section */}
      <div className="my-8 mx-4 sm:mx-10 md:mx-20 lg:mx-40 bg-gray-100 p-10 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Limited Edition Collection
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap justify-between">
              <img
                src="/asset/images/sale_img1.jpg"
                alt="Limited Edition 1"
                className="w-full sm:w-1/2 p-2 rounded-2xl"
              />
              <img
                src="/asset/images/sale_img2.jpg"
                alt="Limited Edition 2"
                className="w-full sm:w-1/2 p-2"
              />
            </div>
            <div className="text-center mt-4">
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded">
                Buy here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Sale Section */}
      <div className="my-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Hot Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-4 sm:mx-10 md:mx-4 lg:mx-0">
          {!isEmpty(productData) &&
            productData
              .slice(10, 20)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>
      <div>
        <p className="flex justify-center text-4xl font-medium mt-10">
          Shop The Look
        </p>
        <img className="mt-5" src="./asset/images/plantbag-2.webp" alt="" />
      </div>
      {/* Promotional Banners */}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-5">
        <div className="relative bg-gray-100 p-10 rounded-lg">
          <h3 className="text-2xl font-semibold">Save up to 20% off</h3>
          <p>Free shipping, Voucher 20% off, Free return, Order over 100$</p>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">
            Order now
          </button>
        </div>
        <div className="relative bg-gray-100 p-10 rounded-lg">
          <h3 className="text-2xl font-semibold">
            The Leather Boutique Accessories
          </h3>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">
            Order now
          </button>
        </div>
        <div className="relative bg-gray-100 p-10 rounded-lg">
          <h3 className="text-2xl font-semibold">
            Percy Nobleman Grooming Styling Bundle
          </h3>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">
            Order now
          </button>
        </div>
        <div className="relative bg-gray-100 p-10 rounded-lg">
          <h3 className="text-2xl font-semibold">New Arrivals 30% off</h3>
          <p>Free shipping, Voucher 20% off, Free return, Order over 100$</p>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">
            Order now
          </button>
        </div>
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
