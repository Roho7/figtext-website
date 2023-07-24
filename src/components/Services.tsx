import blob1 from "../assets/blob-1.png";
import { motion } from "framer-motion";

interface Service {
  number: string;
  name: string;
  about: string;
}
const ServiceArray: Service[] = [
  {
    number: "01",
    name: "Web Apps",
    about:
      "Our team of skilled developers will create tailored web applications that cater to the unique needs of your business. Whether it's an e-commerce platform, CRM system, or any other complex application, we've got you covered.",
  },
  {
    number: "02",
    name: "Portfolio Websites",
    about:
      "Whether you're a creative individual or a business looking to display your projects, we'll create a visually stunning and easy-to-navigate portfolio that highlights your skills and expertise.",
  },
  {
    number: "03",
    name: "Web Hosting and Maintenance",
    about:
      "Focus on your business while we handle the technical aspects. Our web hosting and maintenance services ensure your website stays secure, up-to-date, and running smoothly at all times.",
  },
];

function Services() {
  return (
    <div className="flex flex-col gap-4 mx-4 mb-32">
      {ServiceArray.map((service) => {
        return (
          <motion.div
            className="glass p-4 grid grid-cols-3 "
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col justify-between col-span-2">
              <h3>{service.number}</h3>
              <h1 className="text-6xl">{service.name}</h1>
            </div>
            <div className="flex flex-col gap-4">
              <p>{service.about}</p>
              <span className="text-white underline ">show me</span>
            </div>
          </motion.div>
        );
      })}
      <img
        src={blob1}
        alt=""
        className="absolute h-full w-full -z-10 -right-10"
      />
    </div>
  );
}

export default Services;
