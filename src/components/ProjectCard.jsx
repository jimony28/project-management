import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="bg-white rounded-lg shadow p-5 hover:shadow-md transition cursor-pointer"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h2>
      <p className="text-sm text-gray-500 mb-2">📅 Created: {project.createdAt}</p>
      <p className="text-sm text-gray-500 mb-2">🎯 Tasks: {project.taskCount}</p>
      <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
        {project.status}
      </span>
    </div>
  );
};

export default ProjectCard;