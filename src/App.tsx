import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dividers from "./components/Dividers";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Dividers name={"Services"} />
      <Services />
      <Dividers name={"Pricing"} />
      <Pricing />
      <Dividers name={"About Us"} />
    </>
  );
}

export default App;
