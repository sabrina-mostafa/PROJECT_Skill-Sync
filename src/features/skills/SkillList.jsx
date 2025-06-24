import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSkill, updateSkillRating } from './SkillsSlice';
import { FaCode, FaTrash } from 'react-icons/fa';

const SkillList = () => {
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.filter((skill) =>
    `${skill.title}`.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="dark:bg-gray-300 bg-white p-4 rounded shadow-md space-y-4">
      <div className="flex flex-wrap justify-between items-center">
        <h3 className="text-lg font-semibold">Your Skills</h3>
        <input
          type="text"
          placeholder="Search skills..."
          className="border px-3 py-1 rounded text-sm shadow-sm dark:bg-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredSkills.length === 0 ? (
        <p className="text-gray-500">No matching skills found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredSkills.map((skill) => (
            <li
              key={skill.id}
              className="flex justify-between items-center p-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-200 transition"
            >
              <div>
                <div className='flex justify-between items-center gap-[1rem]'>
                  <p className="flex items-center gap-2 font-medium text-gray-800">
                    <FaCode className="text-teal-500" />
                    {skill.title}
                  </p>
                  {/* Skill rating stars */}
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        onClick={() => dispatch(updateSkillRating({ id: skill.id, rating: star }))}
                        className={`cursor-pointer text-lg ${
                          star <= skill.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        title={`Confidence: ${star}/5`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
              <button
                onClick={() => dispatch(deleteSkill(skill.id))}
                className="text-red-500 hover:text-red-700"
                title="Delete"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillList;
