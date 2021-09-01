import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import HeaderIcons from "./HeaderIcons";
import { useRouter } from "next/router";

const Header = ({ showLogo }) => {
  const router = useRouter();
  const products = useSelector((state) => state.items.items);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-2 sm:px-10 sm:py-3">
        {showLogo && (
          <div onClick={() => router.push("/")} className="px-5 cursor-pointer">
            <HomeIcon className="h-8 text-gray-600 hover:animate-bounce" />
          </div>
        )}
        <HeaderIcons />
        <div className="flex items-center space-x-5">
          <div
            onClick={() => router.push("/checkout")}
            className="flex items-center space-x-2 relative cursor-pointer"
          >
            <p className="text-sm">Cart</p>
            <img src="/images/shopping-cart.png" alt="cart" className="h-9" />
            <span className="header__cart__box">{products.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
