import Link from "next/link";
import ZenUiLogo from "@/public/icons/logo";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-[1000px] mx-auto px-4 py-8">
      <hr className="" />
      <div className="flex justify-center mt-4">
        <div className="flex justify-between items-center mt-[10px] mb-[10px]">
          <ZenUiLogo />
          <Link href="/" className="text-dark-blue text-4xl font-semibold ml-1">
            Zen UI
          </Link>
        </div>
      </div>
      <div className="flex justify-between mx-12">
        <div className="w-[320px]">
          <p className="text-dark-blue text-md font-semibold">About</p>
          <p className="text-sm mt-3 leading-6">
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Cras iaculis
            leo ac sapien ultricies, a fermentum massa ultricies.
          </p>
        </div>
        <div className="flex w-[300px] justify-between">
          <div className="w-[110px]">
            <p className="text-dark-blue text-md font-semibold">Product</p>
            <ul className="text-sm mt-3">
              <li className="mb-2">Components</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="w-[110px]">
            <p className="text-dark-blue text-md font-semibold">Contact</p>
            <ul className="text-sm mt-3">
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Github</li>
              <li>Website</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
