import {
  ArrowRightIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Collection from "./Collection";

const ProductInfo = () => {
  return (
    <div className="sm:h-[35rem]">
      <div className="product__container">
        <div className="space-y-5">
          <h1 className="product__header">Nike Air</h1>
          <p className="product__info">
            The radiance lives on in the Nike Air Force 1 '07 Premium: The
            b-ball OG that adds a little bling to what you know best. It's got
            crisp leather
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex items-center">
            <div className="space-y-1">
              <h1>Pirce :</h1>
              <p className="font-bold text-xl">$100</p>
            </div>

            <div className="ml-8">
              <h1>Size</h1>
              <p className=" text-lg text-gray-600">S M L XL</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="custom__button">Shop Now</button>
            <HeartIcon className="social__icons" />
            <ShoppingBagIcon className="social__icons" />
          </div>
        </div>

        <Collection />
      </div>
    </div>
  );
};

export default ProductInfo;
