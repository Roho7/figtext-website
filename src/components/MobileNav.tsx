import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileNavBody from "./MobileNavBody";
import { motion, AnimatePresence } from "framer-motion";

function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className="md:hidden max-w-max p-2 fixed top-4 right-4 bg-alga-500 text-whale-800 bg-opacity-70 z-50"
        onClick={() => setIsActive(!isActive)}
      >
        <AiOutlineMenu />
      </div>
      <AnimatePresence mode="wait">
        {isActive && <MobileNavBody />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            className="absolute h-full w-full z-30 bg-whale-900 bg-opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsActive(!isActive)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
