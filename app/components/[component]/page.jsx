'use client';
import { useParams } from 'next/navigation';
import Menu from '@/app/utils/Menu';
import Tabs from '@/app/utils/Tabs';
import { componentData } from '../data/componentDetails';

const ComponentDetails = () => {
  const params = useParams();

  return (
    <div className="flex justify-between m-auto w-[1440px] mt-[100px]">
      <div className="sticky top-24 self-start overflow-y-auto w-[300px]">
        <p className="text-xl font-semibold mb-4">All Components</p>
        <Menu />
      </div>
      <div className="w-full ">
        <p className="text-4xl font-semibold mb-3">
          {params.component.charAt(0).toUpperCase() + params.component.slice(1)}
        </p>
        <p className="leading-6 mb-4">
          {componentData[params.component]?.description ||
            'Component description not found.'}
        </p>
        <Tabs 
          component={componentData[params.component]?.example}
          code={componentData[params.component]?.code}
        />
        <p className="text-xl font-semibold mb-4 mt-4">Installation</p>
        <div className="flex">
          <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-5 mr-5 mt-2 mb-5"></div>
          <div className="flex flex-col grow">
            <p className="text-lg font-semibold mb-4">Install dependencies</p>
            <div className="border rounded-2xl shadow mb-5 p-5">
              <p>npm i zenkit-ui</p>
            </div>
            <p className="text-lg font-semibold mb-4">Import the package</p>
            <div className="border rounded-2xl shadow  mb-5 p-6">
              <p>import "zenkit-ui"</p>
            </div>
            <p className="text-lg font-semibold mb-4">Use the component</p>
            <div className="border rounded-2xl shadow mb-5 p-6 font-mono">
              {params.component === 'button' ? (
                <p>{`<zen-button variant="primary">Click me</zen-button>`}</p>
              ) : params.component === 'card' ? (
                <p>{`<zen-card interactive>
                      <h3 slot="header">Card Title</h3>
                      <p>Card content goes here</p>
                      <div slot="footer">Footer content</div>
                    </zen-card>`}</p>
              ) : (
                <p>
                  &lt;zen-{params.component}&gt;&lt;/zen-{params.component}&gt;
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetails;
