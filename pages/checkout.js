import Header from "../components/Header";
import Head from "next/head";
import { useSelector } from "react-redux";
import CartItems from "../components/checkout/CartItems";
import { signIn, signOut, useSession } from "next-auth/client";
import useCollection from "../hooks/useCollection";

const Checkout = () => {
  const [session] = useSession();
  const products = useSelector((state) => state.items.items);
  const [Productsdata, loading] = useCollection(products);

  const getTotal = () =>
    Productsdata.reduce((total, item) => total + item.data.price, 0);

  return (
    <div className="p-2">
      <Head>
        <title>Fashionbook - checkout</title>
      </Head>
      <Header showLogo />
      <main className="checkout__container">
        <div className="flex-[80%]">
          <div>
            <img src="/images/Amazon.jpg" alt="" className="h-52 w-full" />
          </div>
          {Productsdata.length ? (
            <h1 className="cart__header">Shopping Cart Items</h1>
          ) : (
            <h1 className="cart__header">Yoy'r shopping cart is empty</h1>
          )}

          <div className="px-5 py-5 space-y-5 sm:space-y-0">
            {Productsdata?.map(
              ({
                _id,
                data: { title, id, price, description, category, image },
              }) => (
                <CartItems
                  key={_id}
                  id={id}
                  _id={_id}
                  title={title}
                  description={description}
                  category={category}
                  price={price}
                  image={image}
                />
              )
            )}
          </div>
        </div>
        <div className="checkout__header">
          {Productsdata.length > 0 && (
            <>
              <h1 className="text-center mt-11 text-lg text-gray-800 font-mono">
                Total Price:$ {getTotal()}
              </h1>
              {session ? (
                <button className="w-full px-3 py-2 bg-yellow-500 text-white font-mono">
                  Proceed To checkout
                </button>
              ) : (
                <button
                  onClick={signIn}
                  className="w-full px-3 py-2 text-black border border-gray-700 hover:bg-gray-700 hover:text-white font-mono"
                >
                  Sign In to checkout
                </button>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
