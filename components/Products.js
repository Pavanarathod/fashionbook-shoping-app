import { ChevronDownIcon } from "@heroicons/react/outline";
import ProductCard from "./ProductCard";
import SmallIcons from "./SmallIcons";

const Products = ({ products }) => {
  return (
    <div className="product__Container">
      <SmallIcons />
      <div className="products__card">
        {products
          ?.slice(0, 4)
          .map(({ id, title, price, description, category, image, rating }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}

        <div className="md:col-span-2">
          {products
            ?.slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, rating }) => (
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
        </div>

        {products
          ?.slice(5, products.length)
          .map(({ id, title, price, description, category, image, rating }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
