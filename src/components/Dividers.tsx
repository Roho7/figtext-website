import { motion, useScroll } from "framer-motion";

function Dividers(props: any) {
  const { scrollYProgress } = useScroll();
  return (
    <div className="mb-16 flex items-center gap-8 ">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full h-1 origin-left border-t"
      />
      <motion.div style={{}}>
        <h1 className="whitespace-nowrap">{props.name}</h1>
      </motion.div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full h-1 border-t origin-right "
      />
      {/* <svg viewBox="0 0 100% 1" width="100%" height="1">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" />
      </svg> */}
    </div>
  );
}

export default Dividers;
