import Image from "next/image";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="group product_card__container">
      <div className="text-center">
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
          <button className="product_card__buttons group-hover:bg-gray-700">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
