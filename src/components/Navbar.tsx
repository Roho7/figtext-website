import logo from "../assets/logo.png";
import { navLinks } from "../json/navlinks";

function Navbar() {
  function scrollToDiv(link: any) {
    const selectedDiv = document.querySelector(`.${link}`);
    console.log(selectedDiv);

    selectedDiv?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="p-4 flex font-sans text-white items-center justify-between">
      <img src={logo} alt="" className=" object-cover w-20 h-full" />
      <div className="gap-10 md:flex hidden">
        {navLinks.map((item) => {
          return (
            <span
              className="hover:text-alga-500 cursor-pointer"
              onClick={() => scrollToDiv(item.link)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
