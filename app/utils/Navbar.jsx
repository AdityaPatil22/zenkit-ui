'use client';

import Profile from '../../public/icons/profile';
import ZenUiLogo from '../../public/icons/logo';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Alert from './Alert';

const Navbar = () => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [alert, setAlert] = useState(null);
  const dropdownRef = useRef(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setAlert({
      type: 'success',
      message: 'You have been logged out successfully!',
    });
    setDropDownVisible(false);

    // Wait a moment to show the success message before redirecting
    setTimeout(() => {
      router.push('/');
      router.refresh();
    }, 1500);
  };

  const getAuthOptions = () => {
    if (status === 'loading') return [];

    if (session) {
      return [
        {
          id: 1,
          name: session.user.email,
          type: 'text',
          className: 'text-gray-600 font-medium border-b border-gray-100',
        },
        { id: 2, name: 'Logout', onClick: handleLogout },
      ];
    }

    return [
      { id: 1, name: 'Login', path: '/auth/login' },
      { id: 2, name: 'Sign Up', path: '/auth/signup' },
    ];
  };

  const toggleDropDown = () => {
    setDropDownVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sticky top-0 z-10 bg-white">
      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      <div className="flex justify-between items-center h-20 px-5 sm:px-16">
        {/* Logo */}
        <Link href="/" className="flex justify-between items-center">
          <ZenUiLogo />
          <p className="text-4xl font-semibold ml-1">ZenKit UI</p>
        </Link>

        {/* Navigation Links */}
        <div className="flex justify-evenly items-center">
          {session && (
            <Link href="/generate-component" className="mr-8">
              Generate ✨
            </Link>
          )}
          <Link href="/components" className="mr-8">
            Components
          </Link>
          <Link href="/docs" className="mr-8">
            Docs
          </Link>

          {/* User Profile Section */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              className="inline-flex justify-center text-xl font-semibold items-center"
              id="menu-button"
              aria-expanded={dropDownVisible}
              aria-haspopup="true"
              onMouseEnter={toggleDropDown}
            >
              <Profile />
            </button>

            {/* Dropdown Menu */}
            {dropDownVisible && (
              <div
                className="absolute right-0 z-10 w-56 origin-top-right rounded-md ring-1 shadow-md ring-black/5 bg-white focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {getAuthOptions().map((option) => {
                  if (option.type === 'text') {
                    return (
                      <div
                        key={option.id}
                        className={`block w-full text-left px-4 py-2 text-sm ${option.className}`}
                        role="menuitem"
                      >
                        {option.name}
                      </div>
                    );
                  }
                  if (option.onClick) {
                    return (
                      <button
                        key={option.id}
                        onClick={option.onClick}
                        className="block w-full text-left px-4 py-2 text-md hover:bg-slate-100"
                        role="menuitem"
                      >
                        {option.name}
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={option.id}
                      href={option.path}
                      className="block px-4 py-2 text-md hover:bg-slate-100"
                      role="menuitem"
                    >
                      {option.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
