import { motion } from "framer-motion";
import { navLinks } from "../json/navlinks";

function MobileNavBody() {
  function scrollToDiv(link: any) {
    const selectedDiv = document.querySelector(`.${link}`);
    console.log(selectedDiv);

    selectedDiv?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <motion.div
      className={"navbar-mob"}
      initial={{ x: "50vw" }}
      animate={{ x: 0 }}
      exit={{ x: "50vw" }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <ul className="text-white flex flex-col gap-10 h-full m-4">
        {navLinks.map((item) => {
          return (
            <li
              className="hover:text-alga-500"
              onClick={() => scrollToDiv(item.link)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default MobileNavBody;
