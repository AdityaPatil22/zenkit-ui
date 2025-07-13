'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Google from '@/public/icons/Google';
import Github from '@/public/icons/Github';
import { useState } from 'react';
import Alert from '@/app/utils/Alert';
import { signupSchema } from '@/lib/validations/auth';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reset errors and set loading
      setErrors({});
      setIsLoading(true);

      // Validate input
      const validation = signupSchema.safeParse({ email, password });
      if (!validation.success) {
        const formattedErrors = {};
        validation.error.issues.forEach((issue) => {
          formattedErrors[issue.path[0]] = issue.message;
        });
        setErrors(formattedErrors);
        setIsLoading(false);
        return;
      }

      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setAlert({
          type: 'success',
          message: 'Account created successfully! You can now log in.',
        });
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      } else {
        setAlert({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error(error);
      setAlert({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative">
      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="flex flex-col justify-center align-middle m-auto w-[350px] mt-[200px] mb-[200px]">
        <p className="text-4xl font-semibold text-center mb-6">Sign Up</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              className={`border-2 rounded-md p-3 w-full ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-5">
            <input
              className={`border-2 rounded-md p-3 w-full ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            {errors.password && (
              <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-[350px] h-[50px] p-3 border rounded-lg text-white bg-dark-blue mb-5 flex items-center justify-center ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        <p className="text-center mb-4">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-bold mb-4">
            Login
          </Link>
        </p>
        <div className="flex mx-auto mb-5">
          <hr className="w-[120px] my-auto align-middle border-t" />
          <p className="mr-5 ml-5">OR</p>
          <hr className="w-[120px] my-auto align-middle" />
        </div>
        <button className="w-[350px] h-[50px] mb-4 border rounded-lg flex p-3 justify-center hover:border-dark-blue hover:border-opacity-50">
          <Google />
          <p className="ml-3">Continue with Google</p>
        </button>
        <button className="w-[350px] h-[50px] border rounded-lg flex p-3 justify-center hover:border-dark-blue hover:border-opacity-50">
          <Github />
          <p className="ml-3">Continue with GitHub</p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
