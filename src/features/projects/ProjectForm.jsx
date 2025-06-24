import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from './ProjectsSlice';

const ProjectForm = () => {
  const dispatch = useDispatch();
  const availableSkills = useSelector(state => state.skills.skills);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillToggle = (skillId) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addProject(title, description, selectedSkills, liveLink));
      setTitle('');
      setDescription('');
      setLiveLink('');
      setSelectedSkills([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-300 p-4 rounded shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-2">Add New Project</h3>

      <input
        type="text"
        placeholder="Project title"
        className="border p-2 rounded w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project description"
        className="border p-2 rounded w-full mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="url"
        placeholder="Live demo link (https://...)"
        className="border p-2 rounded w-full mb-4"
        value={liveLink}
        onChange={(e) => setLiveLink(e.target.value)}
      />

      <div className="mb-4">
        <p className="font-medium mb-1">Select Related Skills:</p>
        <div className="flex flex-wrap gap-2">
          {availableSkills.map(skill => (
            <button
              type="button"
              key={skill.id}
              onClick={() => handleSkillToggle(skill.id)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                selectedSkills.includes(skill.id)
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
