import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/projects', label: 'Projects' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/reviews', label: 'Reviews' },
];

const Sidebar = () => (
  <nav className="w-48 bg-white shadow h-full p-4">
    <ul className="space-y-2">
      {links.map(l => (
        <li key={l.to}>
          <NavLink 
            to={l.to} 
            className="block py-2 px-3 rounded hover:bg-gray-100"
            activeClassName="bg-indigo-100 font-medium"
          >
            {l.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar; 