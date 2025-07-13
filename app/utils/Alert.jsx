'use client';

import { useEffect } from 'react';

const Alert = ({ type, title, message, onClose }) => {
  const colors = {
    error: {
      bg: 'bg-red-100',
      border: 'border-red-400',
      text: 'text-red-700',
    },
    success: {
      bg: 'bg-green-100',
      border: 'border-green-400',
      text: 'text-green-700',
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-24 right-4 z-50 ${colors[type].bg} border ${colors[type].border} ${colors[type].text} px-4 py-3 rounded shadow-lg w-80`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;
