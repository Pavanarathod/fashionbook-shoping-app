import axios from "axios";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Fashionbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <main className="max-w-[1400px] m-auto py-5">
        <Header />
        <Products products={products} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await axios.get("https://fakestoreapi.com/products");

  const products = data.data;

  return {
    props: {
      products,
    },
  };
};
