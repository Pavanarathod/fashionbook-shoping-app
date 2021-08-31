import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

import Content from "./Content";
import Sidebar from "./Sidebar";

const HeroSection = () => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleChange);

    return () => window.removeEventListener("scroll", handleChange);
  }, []);

  return (
    <div
      className={`min-h-screen sm:flex ${show ? "bg-white" : "bg-gray-100"}`}
    >
      <div className={`hidden lg:block sm:flex-[10%]`}>
        <Sidebar />
      </div>
      <div className="sm:flex-[90%]">
        <Content />
      </div>
    </div>
  );
};

export default HeroSection;
