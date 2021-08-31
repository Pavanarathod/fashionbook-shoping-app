import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-3 py-3  bg-white">
      <div className="lg:ml-[4.5rem]">
        <img src="/images/BrandLogo.png" alt="log" className=" h-10 sm:h-14" />
      </div>
      <div className="flex space-x-3 sm:space-x-7 items-center mr-5">
        <SearchIcon className="social__icons" />
        <HeartIcon className="social__icons" />
        <ShoppingBagIcon className="social__icons" />
        <button className="hidden sm:button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
