import { BsCodeSlash } from "react-icons/bs";
import { BiSolidPen, BiSolidRocket } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

interface Price {
  icon: any;
  name: string;
  price: string;
  point1: string;
  point2: string;
  point3: string;
}
const priceArray: Price[] = [
  {
    name: "Web-Applications",
    point1: "Customized solutions for diverse businesses.",
    point2: "Scalable and high-performing applications.",
    point3: "Seamless integration and functionality.",
    price: "₹30,000",
    icon: <BsCodeSlash />,
  },
  {
    name: "UI/UX Design",
    point1: "Stunning visuals and intuitive interfaces.",
    point2: "User-centric designs for optimal experience",
    point3: "Consistent branding and engaging interactions.",
    price: "₹10,000",
    icon: <BiSolidPen />,
  },
  {
    name: "Portfolio Websites",
    point1: "Customized solutions for diverse businesses.",
    point2: "Scalable and high-performing applications.",
    point3: "Seamless integration and functionality.",
    price: "₹30,000",
    icon: <BiSolidRocket />,
  },
];

function Pricing() {
  return (
    <div className="flex mx-4 gap-4 mb-32 pricing">
      {priceArray.map((price) => {
        return (
          <motion.div
            className="cards p-8 glass2 flex flex-col items-center justify-center gap-4"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
          >
            <span className="text-alga-500 text-2xl">{price.icon}</span>
            <h2 className="text-center">{price.name}</h2>
            <span className="text-white text-lg">
              Starting from {price.price}{" "}
            </span>

            <ul className="text-white list-disc">
              <li> {price.point1}</li>
              <li> {price.point2}</li>
              <li> {price.point3}</li>
            </ul>
            <button>
              book now <AiOutlineArrowRight />
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Pricing;
