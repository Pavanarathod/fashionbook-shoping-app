import axios from "axios";
import Header from "../../components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import db from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { productActions } from "../../features/productSlice";

const Details = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = async () => {
    try {
      await addDoc(collection(db, "products"), product);
      dispatch(productActions.addToCart(product));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>fashionbook - {product.title}</title>
      </Head>
      <Header showLogo />
      <main className="max-w-7xl m-auto min-h-[50vh] ">
        <div className="sm:flex items-center py-5">
          <div className="flex justify-center sm:justify-start">
            <img src={product.image} alt="image" className="h-96" />
          </div>
          <div className=" px-5 flex-1 sm:ml-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-mono line-clamp-1">
                {product.title}
              </h1>
              <p className=" text-lg font-thin">{product.description}</p>
              <div className="flex items-center space-x-5 text-lg">
                <p> {product.rating.count} People liked this,</p>
                <p>Rating: {product.rating.rate}</p>
              </div>
              <p className="text-xl text-gray-600 font-bold">
                $ {product.price}
              </p>
            </div>
            <div className="w-full mt-5">
              <button
                onClick={addToCart}
                className="bg-black hover:bg-gray-700 text-white font-mono py-1 rounded-md w-full"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;

export const getServerSideProps = async (context) => {
  const item = await axios.get(
    `https://fakestoreapi.com/products/${context.query.id}`
  );

  const product = item.data;

  return {
    props: {
      product,
    },
  };
};
