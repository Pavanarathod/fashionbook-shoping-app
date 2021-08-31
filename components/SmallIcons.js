import { ChevronDownIcon } from "@heroicons/react/outline";

const SmallIcons = () => {
  return (
    <div className="flex items-center ml-5 space-x-2">
      <div className="flex items-center space-x-1">
        <p className="text-sm">bundles</p>
        <ChevronDownIcon className="h-4 text-gray-400" />
      </div>
      <div className="flex items-center space-x-1">
        <p className="text-sm">Country of Origin</p>
        <ChevronDownIcon className="h-4 text-gray-400" />
      </div>
      <div className="flex items-center space-x-1">
        <p className="text-sm">Size</p>
        <ChevronDownIcon className="h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default SmallIcons;
