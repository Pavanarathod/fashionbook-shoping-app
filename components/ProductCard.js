import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../features/productSlice";
import { signIn, useSession } from "next-auth/client";
import db from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [session] = useSession();
  const products = useSelector((state) => state.items.items);

  const addTofirebase = async () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    try {
      await addDoc(collection(db, "products"), product);
      dispatch(productActions.addToCart(product));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const productDetails = () => {
    router.push({
      pathname: `/details/${id}`,
    });
  };

  return (
    <div className="group product_card__container">
      <div className="text-center" onClick={productDetails}>
        <Image
          src={image}
          width={200}
          height={180}
          objectFit="contain"
          className="shadow-sm"
        />
      </div>
      <div className="flex flex-col space-y-3 mt-3">
        <h1 className="product_card__header">{title}</h1>
        <p className="text-lg font-bold p-4">${price}</p>
      </div>
      <div className="w-full py-1 px-3">
        <div>
          <button onClick={addTofirebase} className="product_card__buttons">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
