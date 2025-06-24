import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject } from './ProjectsSlice';
import { FaFolderOpen, FaTrash, FaExternalLinkAlt, FaCopy } from 'react-icons/fa';



const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projects);
  const allSkills = useSelector(state => state.skills.skills);
  const [searchTerm, setSearchTerm] = useState('');

  const getSkillNames = (skillIds) =>
    allSkills.filter(skill => skillIds.includes(skill.id)).map(skill => skill.title);

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy link."));
  };

  return (
    <div className="bg-white dark:bg-gray-300 p-4 rounded shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-[1rem]">
        <h3 className="text-lg font-semibold">Your Projects</h3>
        <input
          type="text"
          placeholder="Search projects..."
          className="border px-3 py-1 rounded text-sm shadow-sm dark:bg-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects added yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects
            .filter(project =>
              `${project.title} ${project.description} ${getSkillNames(project.skills).join(' ')}`.toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map(project => (
            <li key={project.id} className="border p-4 rounded">
              <div className="flex justify-between">
                <h4 className="flex items-center gap-2 text-md font-bold">
                  <FaFolderOpen className="text-teal-600" />
                  {project.title}
                </h4>
                <button onClick={() => dispatch(deleteProject(project.id))}>
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </div>

              <p className="text-sm text-gray-600 mt-1">{project.description}</p>

              {/* Live Link Section */}
              {project.liveLink && (
                <div className="flex items-center gap-3 mt-2 text-sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 flex items-center gap-1"
                    title="Open Live Project"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>

                  <button
                    onClick={() => handleCopyLink(project.liveLink)}
                    className="text-gray-600 hover:text-black flex items-center gap-1"
                    title="Copy Link"
                  >
                    <FaCopy /> Copy
                  </button>
                </div>
              )}

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {getSkillNames(project.skills).map(skill => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-800 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
