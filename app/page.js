'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Alert from './utils/Alert';

export default function Home() {
  const [alert, setAlert] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleGenerateClick = () => {
    if (status === 'loading') return;
    if (session) {
      router.push('/generate-component');
    } else {
      setAlert({
        type: 'error',
        message: 'You must be logged-in to Generate Components',
      });
      setTimeout(() => {
        setAlert(null);
        router.push('/auth/login');
      }, 2000); 
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-5 mt-[200px] mb-[200px]">
      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <p className="text-[60px] sm:text-[80px] font-bold opacity-90 text-center max-w-6xl">
        Components you didn&apos;t know you needed
      </p>
      <p className="text-md sm:text-lg text-center mx-5 max-w-3xl mt-[45px]">
        Elevate your website with sleek, modern, and meticulously crafted UI
        components designed to captivate your audience and make your digital
        presence truly unforgettable.
      </p>

      <div className="flex justify-between items-center mx-5 w-[430px] mt-[40px] flex-col sm:flex-row">
        <Link href="/components">
          <button className="w-[200px] h-[50px] border rounded-lg text-white bg-dark-blue hover:bg-white hover:text-dark-blue">
            Browse Components
          </button>
        </Link>
        <Link href="/docs">
          <button className="w-[200px] h-[50px] border rounded-lg hover:bg-dark-blue hover:text-white mt-5 sm:mt-0">
            Get Started
          </button>
        </Link>
      </div>

      {/* Generate Component Button */}
      <button
        onClick={handleGenerateClick}
        className="relative w-[250px] h-[50px] mt-4 rounded-lg border border-slate-700 
          bg-black/80 text-lg font-medium tracking-wide 
          text-transparent bg-clip-text bg-gradient-to-r from-dark-blue via-gray-600 to-black-500
          shadow-sm shadow-[#415a77]/40
          transition-all duration-500 ease-in-out
          hover:scale-105 hover:shadow-md hover:shadow-[#415a77]/60
          overflow-hidden group"
      >
        Generate Component ✨
      </button>
    </div>
  );
}
