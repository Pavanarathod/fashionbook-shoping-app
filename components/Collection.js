import { ArrowRightIcon } from "@heroicons/react/outline";

const Collection = () => {
  return (
    <div className="flex items-center space-x-5 pt-12">
      <div className="collection__image__container">
        <img src="images/One.png" alt="" className="h-[3rem]" />
      </div>
      <div className="collection__image__container">
        <img src="images/Two.png" alt="" className="h-[3rem]" />
      </div>

      <div className="collection__image__container">
        <img src="images/Three.png" alt="" className="h-[3rem]" />
      </div>
      <ArrowRightIcon className="h-6 text-gray-500" />
    </div>
  );
};

export default Collection;
