/* eslint-disable react/prop-types */
const Cart = ({ cartItems, setCartItems }) => {
  // Calculate the total dynamically
  const totalAmount = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );

  const removeFromCart = (productId) => {
    // Remove the item from the cart
    setCartItems(cartItems.filter((product) => product.id !== productId));
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="font-bold text-2xl text-center mb-8">
          <h1>This is your cart page</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-500">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((product) => {
              return (
                <div
                  className="cart-product bg-white shadow-lg rounded-lg p-4 border border-gray-200"
                  key={product.id}
                >
                  <div className="image mb-4">
                    <img
                      src={product.image} // Assuming product has an image property
                      alt={product.name}
                      className="w-full h-60 object-fill  rounded-lg shadow-md"
                    />
                  </div>
                  <div className="cart-product-details text-center">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      ${product.price}
                    </p>
                    <button
                      className="remove-from-cart bg-red-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                      onClick={() => removeFromCart(product.id)} // Remove product from cart
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-8 text-center font-bold text-xl">
          <h1>Total amount: $ {totalAmount}</h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
