import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-1 md:px-16 lg:px-24 py-4 flex justify-around items-center">
        <Link to={"/"} className="text-lg font-bold mr-1 font-serif">
          Shopify
        </Link>

        <form className="flex items-center relative">
          <input
            type="text"
            placeholder="Search the products"
            className="border rounded-lg text-gray-100 py-2 px-3 p-2  bg-gray-700  border-gray-400 relative w-72"
          />
          <button type="submit" className="ml-2">
            <FaSearch className="absolute top-3 right-4 text-red-600" />
          </button>
        </form>

        <div className="flex items-center">
          <Link to={"/cart"} className="mr-4">
            <FaShoppingCart />
          </Link>
          <Link to={"/signIn"}>
            <button className="hidden md:block mr-2 font-serif">
              SignIn | SignUp
            </button>
          </Link>
          <Link to={"/profile"}>
            <FaUser className="block mx-2 md:hidden " />
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-2 my-1">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 justify-around flex space-x-4">
          <Link to={"/"} className="hover:underline font-serif">
            Home
          </Link>
          <Link to={"/about"} className="hover:underline font-serif">
            About
          </Link>
          <Link to={"/shop"} className="hover:underline font-serif">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
