'use client';
import Link from 'next/link';
import Menu from '../utils/Menu';
import 'zenkit-ui';

const BrowseComponents = () => {
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
    <div className="flex justify-between m-auto px-7 max-w-[1440px] mt-[100px]">
      <div className="sticky top-24 self-start overflow-y-auto w-[300px]">
        <p className="text-xl font-semibold mb-4">All Components</p>
        <Menu />
      </div>
      <div className="grid gap-12 w-full grid-col-1 lg:grid-cols-2">
        {allComponents.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/components/${item.link}`}
              className="border rounded-3xl shadow h-96 p-5"
            >
              <img
                className="rounded-t-3xl h-64 w-full"
                alt="Component Image"
                src={item.image}
              />

              <p className="text-lg font-semibold mb-1 mt-3">{item.title}</p>
              <p className="text-md leading-6">{item.description} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseComponents;
