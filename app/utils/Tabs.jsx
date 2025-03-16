"use client"
import { useState } from "react";

const Tabs = ({ component: Component, code }) => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div>
      <div className="flex mb-5">
        <button
          className={`w-[100px] h-[35px] p-1 mr-2 border rounded-lg ${
            activeTab === "preview"
              ? "text-white bg-light-blue"
              : "hover:bg-light-blue hover:text-white"
          }`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`w-[100px] h-[35px] border rounded-lg ${
            activeTab === "code"
              ? "text-white bg-light-blue"
              : "hover:bg-light-blue hover:text-white"
          }`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      <div className="border p-4 rounded-lg bg-gray-100">
        {activeTab === "preview" ? (
            <div className="p-5">
                <Component />
            </div>
        ) : (
          <pre className="bg-[#1C2433] text-white p-4 rounded-lg overflow-auto">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default Tabs;
