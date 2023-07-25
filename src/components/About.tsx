import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/about-img.png";

interface about {
  title: string;
  text: string;
}

const aboutList: about[] = [
  {
    title: "Strategy",
    text: "We build apps that can last. From choosing the correct tech stack to crafting the correct design, we take in consideration your brand and scale.",
  },
  {
    title: "Design",
    text: "Creating visually captivating and user-centric web experiences",
  },
  {
    title: "Development",
    text: "Building robust and dynamic websites tailored to your business needs.",
  },
];

function About() {
  const [selectedTab, setSelectedTab] = useState(aboutList[0]);
  return (
    <div className="mx-16 mb-32 grid grid-col-1 md:grid-cols-3 about-us">
      <div className=" md:col-span-2">
        <p className="mb-16">
          We're not just another web solutions provider; we're a young and
          dynamic team bursting with boundless energy and passion for
          innovation. At Figtex, we embrace the spirit of novelty, pushing the
          boundaries of creativity to deliver cutting-edge solutions for
          businesses and individuals like you.
        </p>
        <div className="md:flex justify-evenly">
          <ul className="m-3">
            {aboutList.map((item) => {
              return (
                <li
                  key={item.title}
                  className={
                    item === selectedTab
                      ? "selected-tab text-alga-500"
                      : "text-white selected-tab "
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  <motion.div
                    key={selectedTab ? selectedTab.title : "empty"}
                    className={
                      item === selectedTab
                        ? "w-2 h-2 rounded-full bg-alga-500 absolute -left-4 top-1/2"
                        : ""
                    }
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {item.title}
                </li>
              );
            })}
          </ul>
          <div className=" glass p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.title : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                {selectedTab ? selectedTab.text : "nothing"}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <img src={aboutImg} alt="" className="h-full w-full object-contain" />
    </div>
  );
}

export default About;
