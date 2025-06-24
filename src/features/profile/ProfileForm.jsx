import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../profile/profileSlice';
import ExportPDF from '../../components/ExportPDF';

const ProfileForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const exportRef = useRef();
  // let closeModal = useRef();

  const [formData, setFormData] = useState({
    name: profile.name || '',
    title: profile.title || '',
    email: profile.email || '',
    linkedin: profile.linkedin || '',
    github: profile.github || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitAndExport = (e) => {
    e.preventDefault();

    // 1. Update Redux
    dispatch(setProfile(formData));

    // 2. Trigger Export (wait a bit to allow update)
    setTimeout(() => {
      exportRef.current?.click();

      // ✅ 3. Close modal
      if (onClose) {
        onClose();
      }
    }, 200); // slight delay to allow state update

    // 3. Reset form
    setFormData({
      name: '',
      title: '',
      email: '',
      linkedin: '',
      github: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmitAndExport}
      className="bg-white dark:bg-gray-200 p-6 rounded space-y-4 "
    >
      <h3 className="text-2xl font-bold mb-5">Profile Info</h3>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Full Name"
        className="w-full p-2 border rounded"
      />

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Your Title (e.g., Frontend Developer)"
        className="w-full p-2 border rounded"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        type="email"
        className="w-full p-2 border rounded"
      />

      <input
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn Profile URL"
        type="url"
        className="w-full p-2 border rounded"
      />

      <input
        name="github"
        value={formData.github}
        onChange={handleChange}
        placeholder="GitHub Profile URL"
        type="url"
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        // onClick={{}}
        className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white font-semibold px-4 py-2 rounded"
      >
        Save & Export PDF
      </button>

      {/* Hidden export trigger */}
      <div className="hidden">
        <ExportPDF exportRef={exportRef} />
      </div>
    </form>
  );
};

export default ProfileForm;
