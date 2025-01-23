const ComponentDetails = () => {
  const allComponents = [
    "Accordion/Collapse",
    "Alerts",
    "Breadcrumbs",
    "Buttons",
    "Cards",
    "Checkboxes",
    "Chips",
    "Clipboard",
    "Containers",
    "Dropdowns",
    "File Upload",
    "Inputs",
  ];

  return (
    <div className="flex justify-between m-auto w-[1440px] mt-[100px]">
      <div className="sticky top-24 self-start overflow-y-auto w-[300px]">
        <p className="text-xl font-semibold mb-4">All Components</p>
        <div className="flex">
          <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-1 mr-5 mt-1 mb-3"></div>
          <div>
            {allComponents.sort().map((item) => {
              return <p className="text-md mb-2 hover:scale-125 origin-left  duration-200 ease-in-out">{item}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full ">
        <p className="text-3xl font-semibold mb-3">Button</p>
        <p className="leading-6 mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex totam
          quas vero quos fuga veritatis ullam, itaque doloremque et nam minima
          nulla quam ipsam natus aliquid error vitae veniam commodi
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
          <div class="h-auto border-l-2 border-dark-blue opacity-65 ml-5 mr-5 mt-2 mb-5"></div>
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
