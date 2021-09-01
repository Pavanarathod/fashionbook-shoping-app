import { useDispatch } from "react-redux";
import { productActions } from "../../features/productSlice";

const CartItems = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(productActions.addToCart(product));
  };

  const remooveItem = () => {
    dispatch(productActions.remooveItem({ id }));
  };
  return (
    <div className="sm:grid sm:grid-cols-5 sm:items-center">
      <div className="flex justify-center sm:justify-start px-5 py-5">
        <img src={image} alt="None" className="h-52 sm:h-60 object-contain" />
      </div>
      <div className="space-y-5 mt-5 sm:col-span-3 px-3">
        <h1 className="text-gray-800 text-lg font-mono  sm:text-left truncate">
          {title}
        </h1>
        <p className="line-clamp-3 sm:line-clamp-2">{description}</p>
        <p>$ {price}</p>
      </div>
      <div className="flex flex-col space-y-5 mt-5">
        <button
          onClick={addToBasket}
          className="px-6 py-1 bg-gray-500 hover:bg-gray-600 text-white font-mono"
        >
          Add Item
        </button>
        <button
          onClick={remooveItem}
          className="px-6 py-1 bg-red-400 hover:bg-red-500 hover:font-bold text-white font-mono"
        >
          remove item
        </button>
      </div>
    </div>
  );
};

export default CartItems;
