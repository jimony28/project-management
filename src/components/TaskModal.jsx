import { Dialog } from '@headlessui/react';
import { useState } from 'react';

const TaskModal = ({ task, hourlyRate, onClose }) => {
  const [hours, setHours] = useState(task.hours);
  const [comments, setComments] = useState(task.comments);

  return (
    <Dialog open onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

      <div className="bg-white rounded-lg p-6 z-10 w-full max-w-md">
        <Dialog.Title className="text-lg font-semibold">{task.title}</Dialog.Title>
        <p className="mt-2">{task.description}</p>

        <div className="mt-4">
          <label className="block text-sm">Hours</label>
          <input
            type="number"
            value={hours}
            onChange={e => setHours(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          />
        </div>

        <div className="mt-2">
          <div>Cost: ₱{(hours * hourlyRate).toLocaleString()}</div>
        </div>

        <div className="mt-4">
          <label className="block text-sm">Comments</label>
          <textarea
            value={comments.join('\n')}
            onChange={e => setComments(e.target.value.split('\n'))}
            className="mt-1 w-full border rounded p-2"
          />
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2">Close</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
        </div>
      </div>
    </Dialog>
  );
};

export default TaskModal;