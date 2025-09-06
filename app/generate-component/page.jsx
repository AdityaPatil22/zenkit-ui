'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function GenerateComponent() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/generate-component');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null; // don’t render anything while redirecting
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!prompt) return;

    setMessages((prev) => [...prev, { type: 'user', content: prompt }]);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { type: 'assistant', content: data.llmresponse },
      ]);
      setPrompt('');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="justify-between m-auto px-7 max-w-[1440px] mt-[100px]">
      <h1 className="text-3xl font-semibold mb-6">Generate Component</h1>
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Describe the component you want to generate..."
          className="w-[84%] border p-3 rounded-lg shadow-md font-light"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-[200px] h-[50px] border rounded-lg mt-5 sm:mt-0
          ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-dark-blue hover:text-white'}
        `}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      <div className="h-[650px] mt-6 border p-4 rounded-lg shadow-sm overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.type === 'user'
                    ? 'bg-dark-blue text-white rounded-bl-none'
                    : 'bg-gray-100 text-gray-800 rounded-br-none'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
