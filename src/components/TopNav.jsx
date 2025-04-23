import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const TopNav = () => (
  <header className="flex items-center justify-between bg-white p-4 shadow">
    <div className="text-xl font-bold">MVP Manager</div>
    <div className="flex items-center space-x-4">
      <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
      <UserCircleIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
    </div>
  </header>
);

export default TopNav;