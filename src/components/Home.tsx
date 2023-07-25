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
        transition={{ duration: 1, type: "tween" }}
      >
        <h1>
          Web Solutions for <h1 className="text-whale-500">businesses</h1>
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 1, type: "tween" }}
      >
        <h2>Elevate your online presence.</h2>
      </motion.div>
      <button>
        show me <AiOutlineArrowRight />
      </button>
      <motion.div
        animate={{ opacity: [0, 100] }}
        transition={{ ease: "ease", duration: 10 }}
      >
        <img
          src={blob1}
          alt=""
          className="absolute top-10 md:top-0 -z-10 scale-150 md:scale-100"
        />
      </motion.div>
    </div>
  );
}

export default Home;
