'use client';
import Link from 'next/link';
import Menu from '../utils/Menu';
import { useComponents } from './data/browseComponents';

const BrowseComponents = () => {
  const { componentData, getPreview, loaded } = useComponents();

  return (
    <div className="flex flex-col md:flex-row justify-between m-auto px-4 sm:px-7 max-w-[1440px] mt-[60px] sm:mt-[100px] gap-8">
      <div className="md:sticky top-24 self-start overflow-y-auto w-full md:w-[300px]">
        <p className="text-xl font-semibold mb-4">All Components</p>
        <Menu />
      </div>
      <div className="grid gap-6 sm:gap-8 lg:gap-12 w-full grid-cols-1 lg:grid-cols-2">
        {componentData.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/components/${item.link}`}
              className="border rounded-3xl shadow p-5 transition-transform hover:scale-[1.02]"
            >
              <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-t-3xl">
                {loaded ? (
                  getPreview(item.id)
                ) : (
                  <div className="animate-pulse bg-gray-200 w-32 h-10 rounded"></div>
                )}
              </div>
              <p className="text-lg font-semibold mb-1 mt-3">{item.title}</p>
              <p className="text-md leading-6">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseComponents;
