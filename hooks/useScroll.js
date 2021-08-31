import { useEffect, useState } from "react";

const useScroll = () => {
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
  return show;
};

export default useScroll;
