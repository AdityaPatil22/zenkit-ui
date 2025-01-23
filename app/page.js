import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-dark-blue text-[80px] font-bold opacity-90 text-center w-[1000px]">
        Components you didn&apos;t know you needed
      </p>
      <p className="text-lg text-center  w-[950px] mt-[45px]">
        Elevate your website with sleek, modern, and meticulously crafted UI
        components designed to captivate your audience and make your digital
        presence truly unforgettable.
      </p>
      <div className="flex justify-between items-center w-[430px] mt-[40px]">
        <Link href="">
          <button className="w-[200px] h-[50px] border rounded-lg text-white bg-dark-blue hover:bg-white hover:text-dark-blue">
            Browse Components
          </button>
        </Link>
        <Link href="/docs">
          <button className="w-[200px] h-[50px] border rounded-lg text-dark-blue hover:bg-dark-blue hover:text-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
