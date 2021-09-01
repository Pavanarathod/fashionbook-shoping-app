import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [session] = useSession();
  return (
    <nav className=" flex justify-between items-center px-3 py-3  bg-white">
      <div className="lg:ml-[4.5rem]">
        <img src="/images/BrandLogo.png" alt="log" className=" h-10 sm:h-14" />
      </div>
      <div className="flex space-x-3 sm:space-x-7 items-center mr-5">
        <h1>{session && session.user.name}</h1>
        <SearchIcon className="social__icons" />
        <HeartIcon className="social__icons" />
        <ShoppingBagIcon className="social__icons" />
        {session ? (
          <button className="hidden sm:block button" onClick={signOut}>
            Logout
          </button>
        ) : (
          <button className="hidden sm:block button" onClick={signIn}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
