import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import HeaderIcons from "./HeaderIcons";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../database/firebase";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import useRedux from "../hooks/useRedux";

const Header = ({ showLogo }) => {
  const router = useRouter();
  const products = useSelector((state) => state.items.items);
  const [loading, data] = useRedux(products);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-2 sm:px-10 sm:py-3">
        {showLogo && (
          <div onClick={() => router.push("/")} className="px-5 cursor-pointer">
            <HomeIcon className="h-8 text-gray-600 hover:animate-bounce" />
          </div>
        )}
        <HeaderIcons />
        {loading ? (
          <div>
            <ClipLoader
              color="blue"
              loading={loading}
              css={override}
              size={50}
            />
          </div>
        ) : (
          <div className="flex items-center space-x-5">
            <div
              onClick={() => router.push("/checkout")}
              className="flex items-center space-x-2 relative cursor-pointer"
            >
              <p className="text-sm">Cart</p>
              <img src="/images/shopping-cart.png" alt="cart" className="h-9" />
              <span className="header__cart__box">{data?.length}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
