import { useState } from 'react';
import TaskModal from './TaskModal';

const TaskTable = ({ tasks, hourlyRate }) => {
  const [activeTask, setActiveTask] = useState(null);

  return (
    <>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="p-2">Task</th>
            <th>Status</th>
            <th>Time</th>
            <th>Cost</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id} onClick={() => setActiveTask(t)} className="cursor-pointer hover:bg-gray-50">
              <td className="p-2">{t.title}</td>
              <td>{t.status}</td>
              <td>{t.hours} hrs</td>
              <td>₱{(t.hours * hourlyRate).toLocaleString()}</td>
              <td>💬 {t.comments.length}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {activeTask && (
        <TaskModal
          task={activeTask}
          hourlyRate={hourlyRate}
          onClose={() => setActiveTask(null)}
        />
      )}
    </>
  );
};

export default TaskTable;