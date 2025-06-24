import React,  { useEffect } from 'react';
import ProfileForm from '../features/profile/ProfileForm';

const ProfileModal = ({ isOpen, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);


  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#000000d8] bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} >
      <div
        className={`bg-white dark:bg-gray-200 rounded shadow-lg w-[95%] sm:w-full max-w-md sm:max-w-[36rem] transform transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
        } relative p-6`} >
        <div className='pb-[1rem]'>
            <button
            onClick={onClose}
            className="absolute top-5 right-5 cursor-pointer text-gray-500 hover:text-black"
            >
            ❌
            </button>
        </div>
        <ProfileForm onClose={onClose}/>
      </div>
    </div>
  );
};

export default ProfileModal;
