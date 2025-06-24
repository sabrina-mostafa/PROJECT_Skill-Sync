import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSkill } from './SkillsSlice';



const SkillForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(addSkill(title, category));
      setTitle('');
      setCategory('');
    }
  };

  const toTitleCase = (text) =>
  text
    .toLowerCase()
    .split(' ')
    .filter(word => word.trim() !== '')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const handleChange = (setter) => (e) => {
    setter(toTitleCase(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-300 p-4 rounded shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-2">Add a New Skill</h3>

      <input
        type="text"
        placeholder="Skill title (e.g., React)"
        className="border p-2 rounded w-full mb-2"
        value={title}
        onChange={handleChange(setTitle)}
      />

      <input
        type="text"
        placeholder="Category (e.g., Frontend)"
        className="border p-2 rounded w-full mb-4"
        value={category}
        onChange={handleChange(setCategory)}
      />

      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all">
        Add Skill
      </button>
    </form>
  );
};

export default SkillForm;
