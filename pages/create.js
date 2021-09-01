import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import Header from "../components/Header";

const Create = () => {
  const title = useRef();
  const price = useRef();
  const description = useRef();
  const image = useRef();
  const category = useRef();

  const createProduct = async (e) => {
    const router = useRouter();
    e.preventDefault();
    await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: title.current.value,
        price: price.current.value,
        description: description.current.value,
        image: image.current.value,
        category: category.current.value,
      }),
    })
      .then((res) => res.json())
      .catch((error) => alert(error.message));

    router.push("/");
  };
  return (
    <div>
      <Head>
        <title>fashionbook create</title>
      </Head>
      <Header showLogo />
      <main className="max-w-3xl min-h-[60vh] m-auto mt-5">
        <h1 className="text-center">Create New Product</h1>

        <div className="mt-10 px-5">
          <form className="flex flex-col space-y-3" onSubmit={createProduct}>
            <input
              ref={title}
              type="text"
              placeholder="Title"
              className="create__input__box"
              required
            />
            <input
              ref={price}
              type="text"
              placeholder="Price"
              className="create__input__box"
              required
            />
            <input
              ref={description}
              type="text"
              placeholder="description"
              className="create__input__box"
            />
            <input
              required
              ref={image}
              type="text"
              placeholder="image url"
              className="create__input__box"
            />
            <input
              required
              ref={category}
              type="text"
              placeholder="category"
              className="create__input__box"
            />

            <button
              type="submit"
              className="bg-gray-800 text-white font-mono py-2"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Create;
