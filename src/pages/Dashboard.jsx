import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      name: 'Community Clean Up',
      createdAt: 'April 20, 2025',
      taskCount: 0,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Youth Wellness Campaign',
      createdAt: 'April 15, 2025',
      taskCount: 2,
      status: 'Active',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🎯 My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;