import blob1 from "../assets/big-blob.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="mx-10 h-screen flex flex-col justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h1>
          Web Solutions for <h1 className="text-whale-500">businesses</h1>
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 1, type: "spring" }}
      >
        <h2>Elevate your online presence.</h2>
      </motion.div>
      <button>
        show me <AiOutlineArrowRight />
      </button>
      <img src={blob1} alt="" className="absolute top-0 -z-10" />
    </div>
  );
}

export default Home;
