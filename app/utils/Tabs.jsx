'use client';
import { useState } from 'react';

const Tabs = ({ component: Component, code }) => {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div>
      <div className="flex mb-4 sm:mb-5">
        <button
          className={`w-[90px] sm:w-[100px] h-[32px] sm:h-[35px] p-1 mr-2 border rounded-lg text-sm sm:text-base ${
            activeTab === 'preview'
              ? 'text-white bg-light-blue'
              : 'hover:bg-light-blue hover:text-white'
          }`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        <button
          className={`w-[90px] sm:w-[100px] h-[32px] sm:h-[35px] border rounded-lg text-sm sm:text-base ${
            activeTab === 'code'
              ? 'text-white bg-light-blue'
              : 'hover:bg-light-blue hover:text-white'
          }`}
          onClick={() => setActiveTab('code')}
        >
          Code
        </button>
      </div>

      <div className="border p-3 sm:p-4 rounded-lg bg-gray-100">
        {activeTab === 'preview' ? (
          <div className="p-3 sm:p-5">
            <Component />
          </div>
        ) : (
          <pre className="bg-[#1E293B] text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto shadow-lg font-mono text-sm sm:text-base leading-relaxed border border-gray-700">
            <code className="block whitespace-pre-wrap">{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default Tabs;
