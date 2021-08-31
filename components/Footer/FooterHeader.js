import Link from "next/link";

const FooterHeader = () => {
  return (
    <>
      <div className="space-y-4">
        <img src="/images/BrandLogo.png" alt="" />
        <p className="text-gray-400 text-base lg:text-lg font-mono leading-loose  ml-1">
          We are Fashion experts who are passionately excited about the latest
          Fashion trends in Fashion World.
        </p>
      </div>
      <div className="mt-4 text-white">
        <div className="flex items-center space-x-5 py-5 lg:py-10 border-b border-gray-700">
          <h1 className="text-lg font-mono text-indigo-300 capitalize">
            ADDRESS
          </h1>
          <p className="text-base font-mono text-gray-200">
            L-148, 5th Main Rd, Sector 6 HSR Layout, Bengaluru, Karnataka 560102
          </p>
        </div>

        <div className="flex items-center space-x-7 py-5 lg:py-10 border-b border-gray-700">
          <h1 className="text-lg font-mono text-indigo-300 capitalize">
            PHONES
          </h1>
          <p className="text-base font-mono text-gray-200">
            +91 3543513548 / +91 68434165161
          </p>
        </div>
        <div className="flex items-center space-x-8 py-5 lg:py-10 border-b border-gray-700">
          <h1 className="text-lg font-mono text-indigo-300 capitalize">
            EMAILS
          </h1>
          <Link href="mailto:#">
            <p className="text-base font-mono cursor-pointer text-gray-200">
              pavan.fashionbook@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterHeader;
