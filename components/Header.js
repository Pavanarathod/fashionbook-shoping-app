import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-50 p-5 shadow-sm">
      <div className="flex items-center justify-between px-2 sm:px-10 sm:py-3">
        <div className="md:hidden">
          <img src="images/BrandLogo.png" alt="log" className="" />
        </div>
        <div className="hidden md:inline-flex flex-1 px-5">
          <div className="flex items-center w-full py-1 px-2 border border-gray-200">
            <SearchIcon className="h-5 text-gray-500" />
            <input
              type="text"
              placeholder="search brands, products"
              className="w-full focus:outline-none px-3 py-1 bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="hidden md:inline-flex space-x-3">
            <p>Profiles</p>
            <img src="images/user.png" alt="user" className="h-6" />
          </div>
          <div className="hidden md:inline-flex space-x-3">
            <p>Whishlist</p>
            <HeartIcon className="h-6" />
          </div>
          <div className="flex items-center space-x-3 relative cursor-pointer">
            <p>Cart</p>
            <ShoppingBagIcon className="h-6" />
            <span className="absolute bg-red-500 px-2 text-white font-bold rounded-full bottom-3 left-12">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
