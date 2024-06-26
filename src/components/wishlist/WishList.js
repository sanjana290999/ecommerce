import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "../features/wishlist/WishlistSlice";
import { toast } from "react-toastify";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.whishlistData);
  console.log({ wishlistItems });
  const dispatch = useDispatch();
  const handleRemove = (whishlistId) => {
    console.log({ whishlistId });
    dispatch(removeWishlist(whishlistId));
    toast.success("remove whishlist");
  };
  return (
    <div className="p-6 md:p-8 bg-white mb-5 rounded-xl mx-auto mt-8 min-h-screen ml-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={item.mainImage.url}
                alt={item.name}
                className="w-40 h-40 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-xl font-bold mb-4">{item.price}</p>
              <div className="flex space-x-4">
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600">
                  Add to Cart
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-500"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
