"use client"
import { useParams } from "next/navigation";
import Menu from "@/app/utils/Menu";

const componentData = {
  button: {
    title: "Button",
    description:
      "Buttons allow users to take actions with a single click. They can be customized with styles and icons.",
  },
  card: {
    title: "Card",
    description:
      "Cards provide a flexible and extensible content container with multiple variants and options.",
  },
};

const ComponentDetails = () => {
  const params = useParams();

  return (
    <div className="flex justify-between m-auto w-[1440px] mt-[100px]">
      <div className="sticky top-24 self-start overflow-y-auto w-[300px]">
        <p className="text-xl font-semibold mb-4">All Components</p>
        <Menu />
      </div>
      <div className="w-full ">
        <p className="text-3xl font-semibold mb-3">{params.component}</p>
        <p className="leading-6 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat eius quidem quas fuga iusto. Totam deserunt facere aliquam officia provident voluptatum cumque, ad, facilis in deleniti error adipisci quam!
        </p>
        <div className="flex mb-5">
          <button className="w-[100px] h-[35px] p-1 mr-2 border rounded-lg text-white bg-light-blue hover:bg-light-blue">
            Preview
          </button>
          <button className="w-[100px] h-[35px] border rounded-lg hover:bg-light-blue hover:text-white">
            Code
          </button>
        </div>
        <div className="border rounded-2xl shadow h-80 mb-5 p-6 bg-light-blue"></div>
        <p className="text-xl font-semibold mb-4">Installation</p>
        <div className="flex">
          <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-5 mr-5 mt-2 mb-5"></div>
          <div className="flex flex-col grow">
            <p className="text-lg font-semibold mb-4">Install dependencies</p>
            <div className="border rounded-2xl shadow  mb-5 p-6"></div>
            <p className="text-lg font-semibold mb-4">Add util file</p>
            <div className="border rounded-2xl shadow  mb-5 p-6"></div>
            <p className="text-lg font-semibold mb-4">Copy the component</p>
            <div className="border rounded-2xl shadow  mb-5 p-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetails;
