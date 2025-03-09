import Link from 'next/link';

const Menu = () => {
  const allComponents = [
    {
      id: 1,
      title: 'Button',
      link: 'button',
      image:
        'https://images.unsplash.com/photo-1737047119483-1ddb4cb13540?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias modi nihil deserunt sintß',
    },
    {
      id: 2,
      title: 'Card',
      link: 'card',
      image:
        'https://images.unsplash.com/photo-1737047119483-1ddb4cb13540?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias modi nihil deserunt sintß',
    },
  ];
  return (
    <div className="flex">
      <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-1 mr-5 mt-1 mb-3"></div>
      <div>
        {allComponents.map((item) => {
          return (
            <p
              key={item.id}
              className="text-md mb-2 hover:scale-125 hover:cursor-pointer origin-left duration-200 ease-in-out"
            >
              <Link href={`/components/${item.link}`}>{item.title}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
