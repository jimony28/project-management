import TopNav from '../components/TopNav';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';
import StatsSummary from '../components/StatsSummary';
import TaskTable from '../components/TaskTable';
import TaskModal from '../components/TaskModal';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  // TODO: fetch these from API/firestore
  const clientName = 'Acme Corp';
  const project = { id:1, name:'Website Redesign', completed:6, total:10, hours:30, cost:15000 };
  const tasks = [ /* ...task list... */ ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="p-6 overflow-auto">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">{clientName}</h2>
            <div className="text-gray-600">{project.name}</div>
          </header>

          <section className="mb-8">
            <ProgressBar step={project.completed/project.total * 100} label={`${project.completed} of ${project.total} tasks`} />
            <StatsSummary hours={project.hours} cost={project.cost} />
          </section>

          <section>
            <TaskTable tasks={tasks} hourlyRate={project.cost/project.hours} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;