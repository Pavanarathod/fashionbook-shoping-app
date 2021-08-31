import { MenuAlt2Icon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const Sidebar = () => {
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
    <div className="flex flex-col justify-between h-screen items-center">
      <div className="flex justify-center bg-black py-6 w-full">
        <MenuAlt2Icon className="h-7 text-white" />
      </div>
      <div className={`${show && "hidden"} space-y-5 pb-14`}>
        <img src="/images/instagram.png" alt="One" className="social__icons" />
        <img src="/images/Twitter.png" alt="Two" className="social__icons" />
        <img src="/images/Gmail.png" alt="Three" className="social__icons" />
        <img src="/images/GitTwo.png" alt="Four" className="social__icons" />
      </div>
    </div>
  );
};

export default Sidebar;
