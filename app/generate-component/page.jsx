'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <div className="justify-between m-auto px-4 sm:px-7 max-w-[1440px] mt-[60px] sm:mt-[100px]">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Generate Component</h1>
      <form className="flex flex-col sm:flex-row gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Describe the component you want to generate..."
          className="w-full sm:w-[84%] border p-3 rounded-lg shadow-md font-light"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full sm:w-[200px] h-[50px] border rounded-lg
          ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-dark-blue hover:text-white'}
        `}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      <div className="h-[400px] sm:h-[650px] mt-4 sm:mt-6 border p-3 sm:p-4 rounded-lg shadow-sm overflow-y-auto">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[80%] rounded-lg p-3 sm:p-4 text-sm sm:text-base ${
                  message.type === 'user'
                    ? 'bg-dark-blue text-white rounded-bl-none'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-br-none shadow-sm'
                }`}
              >
                {message.type === 'user' ? (
                  <p className="whitespace-pre-wrap">{message.content}</p>
                ) : (
                  <div className="prose prose-base lg:prose-lg dark:prose-invert max-w-none [&_pre]:text-base">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '');
                          return !inline ? (
                            <pre className="bg-gray-800 rounded-md p-4 overflow-x-auto text-base leading-relaxed">
                              <code className={`${className} text-base`} {...props}>
                                {children}
                              </code>
                            </pre>
                          ) : (
                            <code className="bg-gray-200 dark:bg-gray-700 rounded px-1 text-base" {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
