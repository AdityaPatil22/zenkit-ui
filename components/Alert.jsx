'use client';

const Alert = ({ type, title, message }) => {
  const colors = {
    error: {
      header: 'bg-red-500',
      body: 'border-red-400 bg-red-100 text-red-700',
    },
    success: {
      header: 'bg-green-500',
      body: 'border-green-400 bg-green-100 text-green-700',
    },
  };

  return (
    <div role="alert" className="mb-4">
      <div
        className={`${colors[type].header} text-white font-bold rounded-t px-4 py-2`}
      >
        {title}
      </div>
      <div
        className={`border border-t-0 rounded-b px-4 py-3 ${colors[type].body}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
