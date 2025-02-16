const descriptionSections = [
  {
    id: "1",
    title: "What is Zen UI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    title: "Why use Zen UI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    title: "What we have used",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "4",
    title: "How to install",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Description = () => {
  

  return (
    <div className="flex justify-between m-auto max-w-[1440px] mt-[100px] px-7">
      <div className="sticky top-24 self-start overflow-y-auto w-[300px]">
        <p className="text-xl font-semibold mb-4">Get Started</p>
        <div className="flex">
          <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-1 mr-5 mt-1 mb-3"></div>
          <div>
            {descriptionSections.sort().map((item) => {
              return <p key={item.id} className="text-md mb-2 hover:scale-125 hover:cursor-pointer origin-left duration-200 ease-in-out"><a href={`#${item.id}`}>{item.title}</a></p>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full ">
        {descriptionSections.map((item) => (
          <div className="scroll-pt-5" id={item.id} key={item.id}>
            <p className="text-3xl font-semibold mb-3">{item.title}</p>
            <p className="leading-6 mb-[500px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
