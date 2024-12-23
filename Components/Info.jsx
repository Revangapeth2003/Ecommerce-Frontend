import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const Info = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime you need",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Money Back Guarentee",
      description: "Full Refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Secure Payment",
      description: "Your payment details will be secure with us",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best discount prices on our products",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => {
          return (
            <div
              //transition-transform duration-100 hover:scale-110 [ethukuna hover panna expand agum athuku]
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md cursor-pointer  transition-transform duration-100 hover:scale-110"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
