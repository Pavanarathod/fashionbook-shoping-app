import { useDispatch } from "react-redux";
import { productActions } from "../../features/productSlice";
import { doc, deleteDoc } from "firebase/firestore";
import db from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const CartItems = ({ id, title, price, description, category, image, _id }) => {
  const dispatch = useDispatch();

  const addToBasket = async () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    try {
      await addDoc(collection(db, "products"), product);
      dispatch(productActions.addToCart(product));
    } catch (error) {}
  };

  const remooveItem = async () => {
    try {
      await deleteDoc(doc(db, "products", _id));

      dispatch(productActions.remooveItem({ id }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart__container">
      <div className="cart__image">
        <img src={image} alt="None" className="h-52 sm:h-60 object-contain" />
      </div>
      <div className="space-y-5 mt-5 sm:col-span-3 px-3">
        <h1 className="cart__title">{title}</h1>
        <p className="line-clamp-3 sm:line-clamp-2">{description}</p>
        <p>$ {price}</p>
      </div>
      <div className="flex flex-col space-y-5 mt-5">
        <button onClick={addToBasket} className="cart__button__one">
          Add Item
        </button>
        <button onClick={remooveItem} className="cart__button__two">
          remove item
        </button>
      </div>
    </div>
  );
};

export default CartItems;
