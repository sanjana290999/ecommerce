import React from "react";

const WishlistPage = () => {
  const wishlistItems = [
    // Sample data
    {
      id: 1,
      name: "Sample Product 1",
      image: "https://via.placeholder.com/150",
      price: "₹1,299",
    },
    {
      id: 2,
      name: "Sample Product 2",
      image: "https://via.placeholder.com/150",
      price: "₹999",
    },
    // Add more items as needed
  ];

  return (
    <div className="p-6 md:p-8 bg-gray-100 mx-auto mt-10 min-h-screen max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-xl font-bold mb-4">{item.price}</p>
              <div className="flex space-x-4">
                <button className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700">
                  Add to Cart
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700">
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
