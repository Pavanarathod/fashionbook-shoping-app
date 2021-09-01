import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import db from "../database/firebase";

const useCollection = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const products = await getDocs(collection(db, "products"));
        setProducts(products.docs.map((doc) => doc.data()));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return [products, loading];
};

export default useCollection;
