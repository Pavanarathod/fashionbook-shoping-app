import Category from "./Category";
import Navbar from "./Navbar";
import ProductInfo from "./ProductInfo";

const Content = () => {
  return (
    <div className=" bg-white min-h-screen max-w-7xl">
      <Navbar />
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-2">
        <div>
          <ProductInfo />
        </div>
        <div className="px-3 flex justify-center mt-20">
          <img src="images/Shoe.png" alt="img" className="h-[25rem]" />
        </div>
      </div>
    </div>
  );
};

export default Content;
