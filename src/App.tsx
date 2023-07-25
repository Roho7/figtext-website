import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dividers from "./components/Dividers";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import MobileNav from "./components/MobileNav";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <MobileNav />
      <Home />
      <Dividers name={"Services"} />
      <Services />
      <Dividers name={"Pricing"} />
      <Pricing />
      <Dividers name={"About Us"} />
      <About />
      <Dividers name={"Contact Us"} />
      <Contact />
    </div>
  );
}

export default App;
