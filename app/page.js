import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-5 mt-[200px] mb-[200px]">
      <p className="text-[60px] sm:text-[80px] font-bold opacity-90 text-center max-w-6xl">
        Components you didn&apos;t know you needed
      </p>
      <p className="text-md sm:text-lg text-center mx-5 max-w-3xl mt-[45px]">
        Elevate your website with sleek, modern, and meticulously crafted UI
        components designed to captivate your audience and make your digital
        presence truly unforgettable.
      </p>
      <div className="flex justify-between items-center mx-5 w-[430px] mt-[40px] flex-col sm:flex-row">
        <Link href="/components">
          <button className="w-[200px] h-[50px] border rounded-lg text-white bg-dark-blue hover:bg-white hover:text-dark-blue">
            Browse Components
          </button>
        </Link>
        <Link href="/docs">
          <button className="w-[200px] h-[50px] border rounded-lg hover:bg-dark-blue hover:text-white mt-5 sm:mt-0">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
