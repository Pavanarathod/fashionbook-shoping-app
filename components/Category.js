import { ArrowUpIcon } from "@heroicons/react/outline";

const Category = () => {
  return (
    <section>
      <div>
        <div className="flex justify-evenly items-center mt-5 bg-gray-100 py-6">
          <div className="image__container">
            <img src="images/Tshirt.svg" alt="" className="collection__icon" />
            <p>Shirts</p>
          </div>
          <div className="image__container">
            <img src="images/Women.svg" alt="" className="collection__icon" />
            <p>Girls</p>
          </div>
          <div className="image__container">
            <img src="images/Sock.svg" alt="" className="collection__icon" />
            <p>Socks</p>
          </div>
          <div className="image__container">
            <img src="images/Bag.svg" alt="" className="collection__icon" />
            <p>Bags</p>
          </div>
          <div className="image__container">
            <img src="images/Acc.svg" alt="" className="collection__icon" />
            <p>Accessories</p>
          </div>
          <div className="image__container">
            <img src="images/Boot.svg" alt="" className="collection__icon" />
            <p>Shirts</p>
          </div>
          <div className="image__container">
            <img src="images/Tshirt.svg" alt="" className="collection__icon" />
            <p>Shoes</p>
          </div>
          <div className="image__container">
            <img src="images/Hat.svg" alt="" className="collection__icon" />
            <p>Hat</p>
          </div>
          <div className="image__container">
            <img src="images/Pants.svg" alt="" className="collection__icon" />
            <p>Pants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
