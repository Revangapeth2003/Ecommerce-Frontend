/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const Shop = ({ cartItems, setCartItems }) => {
  const mockData = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71mR1c5l70L._AC_UY350_.jpg",
      name: "Women's Watch",
      price: 30.6,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/71drVy8MKoL._AC_UF1000,1000_QL80_.jpg",
      name: "Toy",
      price: 65.99,
    },
    {
      id: 3,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097",
      name: "Headphone",
      price: 29.99,
    },
    {
      id: 4,
      image:
        "https://theskinstory.in/cdn/shop/files/1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.jpg?v=1704451340",
      name: "Shampoo",
      price: 19.99,
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Men's Shirt",
      price: 49.99,
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/51noMsI8n0L._AC_UY1100_.jpg",
      name: "Cap",
      price: 40.99,
    },
    {
      id: 7,
      image:
        "https://rukminim2.flixcart.com/image/2700/2700/l2hwwi80/shoe/t/3/o/5-bab774-shoe-island-white-original-imagdtts8wfm3tyh.jpeg?q=60&crop=false",
      name: "Shoe",
      price: 60.99,
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/71GP0KE+9PL._AC_UY350_.jpg",
      name: "Men's Watch",
      price: 30.6,
    },
    {
      id: 9,
      image:
        "https://egoss.in/cdn/shop/products/DSC_9344.jpg?v=1646828569&width=2000",
      name: "Sandel",
      price: 19.99,
    },
    {
      id: 10,
      image:
        "https://homafy.com/wp-content/uploads/2023/06/Blue-kid-school-bag.jpg",
      name: "Bag",
      price: 28.99,
    },
  ];

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Add the selected product to the cart
  };

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-5 lg:p-6">
      {mockData.slice(0, 10).map((product) => (
        <div key={product.id} className="my-8 h-64 cursor-pointer ">
          <div className="h-64 cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="relative">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>${product.price}</p>
            <div className="flex items-center mt-2 bottom-0">
              <FaStar className="text-yellow-500 size-4" />
              <FaStar className="text-yellow-500 size-4" />
              <FaStar className="text-yellow-500 size-4" />
              <FaStar className="text-yellow-500 size-4 mr-2" />
            </div>
            <div
              className="absolute bottom-0 right-2 flex items-center justify-center w-6 h-6 bg-red-600 group text-white text-sm rounded-full hover:w-24 hover:bg-red-700 transition-all"
              onClick={() => addToCart(product)}
              // Pass the current product
            >
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block">Add to cart</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
