const HeaderIcons = () => {
  return (
    <div className="hidden md:inline-flex space-x-8 cursor-pointer">
      <div className="flex flex-col items-center">
        <img src="images/man.png" alt="" className="h-7" />
        <p>Men</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="images/woman.png" alt="" className="h-7" />
        <p>Women</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="images/children.png" alt="" className="h-7" />
        <p>children</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="images/dress.png" alt="" className="h-7" />
        <p>Wedding </p>
      </div>
      <div className="flex flex-col items-center">
        <img src="images/jacket.png" alt="" className="h-7" />
        <p>Leather Jackets</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="images/watch.png" alt="" className="h-7" />
        <p>Watches</p>
      </div>
    </div>
  );
};

export default HeaderIcons;
