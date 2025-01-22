import Link from "next/link";
import Profile from "@/public/icons/profile";
import ZenUiLogo from "@/public/icons/logo";

const Navbar = () => {
  return (
    <div className="flex flex-col sticky top-0 z-10 bg-white">
      <div className="flex justify-between items-center  h-20 px-16 ">
        <div className="flex justify-between items-center">
          <ZenUiLogo />
          <Link href="/" className="text-dark-blue text-4xl font-semibold ml-1">
            Zen UI
          </Link>
        </div>
        <div className="flex justify-evenly items-center">
          <Link href="/components" className="mr-8">
            Components
          </Link>
          <Link href="/docs" className="mr-8">
            Docs
          </Link>
          <Profile />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
