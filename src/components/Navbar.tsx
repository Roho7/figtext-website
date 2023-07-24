import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="p-4 flex font-sans text-white items-center justify-between">
      <img src={logo} alt="" className=" object-cover w-20 h-full" />
      <div className="flex gap-10">
        <span>services</span>
        <span>pricing</span>
        <span>about us</span>
        <span>contact us</span>
      </div>
    </div>
  );
}

export default Navbar;
