import { Link } from "react-router-dom";
import { Categories } from "../assets/mockApi";
import Info from "../Components/Info";
import Category from "../Components/Category";

const Home = () => {

  return (
    <div className="bg-white mt-2  px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto flex flex-col md:flex-row space-x-1">
        <div className="w-full md:w-3/12">
          <div className="bg-indigo-200 font-bold font-serif ">
            Shop by category
          </div>
          <ul className="space-y-4 bg-gradient-to-r from-cyan-200 to-blue-200">
            {Categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center font-medium font-serif"
                >
                  <div className="h-2 w-2 bg-pink-600 rounded-full mx-2"></div>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full mt-8 md:w-9/12 md:mt-0 h-96 relative flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1508614999368-9260051292e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero-image"
            className="h-full w-full object-cover"
          />
          <div className="absolute text-center">
            <h1 className="text-black mt-4 text-center font-serif font-bold">
              Discover Our Products
            </h1>
            <h3 className="text-black mt-4 text-center font-serif font-bold">
              Click shop now to shopping
            </h3>
            <p className="mb-2">Explore a vde range of high quality products</p>
            <Link
              to={"/shop"}
              className="px-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-md hover:from-pink-500 hover:to-orange-500 "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <Info />
      <Category />
    </div>
  );
};

export default Home;
