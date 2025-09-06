'use client';
import { useParams } from 'next/navigation';
import Menu from '@/app/utils/Menu';
import Tabs from '@/app/utils/Tabs';
import { componentData } from '../data/componentDetails';

const ComponentDetails = () => {
  const params = useParams();

  return (
    <div className="flex flex-col md:flex-row justify-between m-auto max-w-[1440px] mt-[60px] sm:mt-[100px] px-4 sm:px-7">
      <div className="md:sticky top-24 self-start overflow-y-auto w-full md:w-[300px] mb-6 md:mb-0">
        <p className="text-lg sm:text-xl font-semibold mb-4">All Components</p>
        <Menu />
      </div>
      <div className="w-full md:ml-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
          {params.component.charAt(0).toUpperCase() + params.component.slice(1)}
        </p>
        <p className="text-sm sm:text-base leading-6 mb-4">
          {componentData[params.component]?.description ||
            'Component description not found.'}
        </p>
        <Tabs 
          component={componentData[params.component]?.example}
          code={componentData[params.component]?.code}
        />
        <p className="text-lg sm:text-xl font-semibold mb-4 mt-6">Installation</p>
        <div className="flex">
          <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-2 sm:ml-5 mr-3 sm:mr-5 mt-2 mb-5"></div>
          <div className="flex flex-col grow">
            <p className="text-base sm:text-lg font-semibold mb-4">Install dependencies</p>
            <div className="border rounded-xl sm:rounded-2xl shadow mb-5 p-4 sm:p-5 space-y-2 overflow-x-auto">
              <p className="font-mono text-sm sm:text-base">npm install zenkit-ui</p>
            </div>
            
            <p className="text-base sm:text-lg font-semibold mb-4">Import the component</p>
            <div className="border rounded-xl sm:rounded-2xl shadow mb-5 p-4 sm:p-6 overflow-x-auto">
              <p className="font-mono text-sm sm:text-base whitespace-nowrap">{`import { Zen${params.component.charAt(0).toUpperCase() + params.component.slice(1)} } from 'zenkit-ui'`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetails;
