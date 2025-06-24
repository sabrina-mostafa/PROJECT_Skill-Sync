import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaChevronDown } from 'react-icons/fa';


const ThemeToggle = () => {
  const { theme, setTheme, themes } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm cursor-pointer px-4 py-2 rounded border shadow hover:text-teal-300 transition-all"
      >
        <div className='flex justify-center items-center'>
          <p>Select Theme</p>
          <FaChevronDown className={`ml-2 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}/>
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute md:right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50"
        >
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900 ${
                theme === t ? 'text-teal-500 font-semibold' : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {t === 'light' && '☀️ Light Mode'}
              {t === 'dark' && '🌙 Dark Mode'}
              {t === 'sepia' && '🌤️ Sepia Mode'}
              {t === 'forest' && '🌲 Forest Mode'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
