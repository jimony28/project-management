import React, { useState } from 'react'
import { Home, FileText, Palette, Menu, Bell, User } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './Card'
import Textarea from './Textarea'

const Button = ({
    children,
    onClick,
    variant = 'default',
    className = '',
    size = 'default',
    ...props
  }: {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'default' | 'secondary' | 'outline' | 'ghost'
    className?: string
    size?: 'default' | 'sm' | 'lg' | 'xl'
    [key: string]: any
  }) => {
    const base = 'rounded-md font-medium transition focus:outline-none focus:ring'
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
      ghost: 'text-gray-900 hover:bg-gray-100',
    }
    const sizes = {
      default: 'px-4 py-2',
      sm: 'px-2 py-1 text-sm',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    }
    return (
      <button
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

// Types
type Task = {
  id: string;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed';
  hoursLogged: number;
  estimatedHours: number;
  cost: number;
  description: string;
  comments: string[];
};

// Custom Button Component (to replace Shadcn's Button)
const Button = ({
  children,
  onClick,
  variant = 'default',
  className = '',
  size = 'default',
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'xl';
  [key: string]: any;
}) => {
  const baseClasses = 'rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
    ghost: 'text-gray-900 hover:bg-gray-100',
  };

  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1.5 text-xs',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Card Component (to replace Shadcn's Card)
const Card = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={`rounded-lg border bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <p
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const CardContent = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Custom Input Component (to replace Shadcn's Input)
const Input = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

// Custom Textarea Component (to replace Shadcn's Textarea)
const Textarea = ({
  className = '',
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

// Main Dashboard Component
export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [newComment, setNewComment] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Website Homepage Design',
      status: 'in-progress',
      hoursLogged: 12,
      estimatedHours: 20,
      cost: 1200,
      description: 'Create wireframes and design mockups for the homepage including responsive layouts.',
      comments: ['Please focus on mobile experience first', 'Can we see more color options?']
    },
    {
      id: '2',
      title: 'Brand Identity Development',
      status: 'not-started',
      hoursLogged: 0,
      estimatedHours: 15,
      cost: 1500,
      description: 'Develop logo concepts and brand guidelines including color palette and typography.',
      comments: []
    },
    {
      id: '3',
      title: 'Content Strategy',
      status: 'completed',
      hoursLogged: 8,
      estimatedHours: 8,
      cost: 800,
      description: 'Outline content strategy and key messaging for all marketing materials.',
      comments: ['Great work on this!']
    }
  ];

  const totalHoursLogged = tasks.reduce((sum, task) => sum + task.hoursLogged, 0);
  const totalCost = tasks.reduce((sum, task) => sum + task.cost, 0);
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const progressPercentage = Math.round((completedTasks / tasks.length) * 100);

  const handleAddComment = () => {
    if (!selectedTask || !newComment.trim()) return;
    
    const updatedTask = {
      ...selectedTask,
      comments: [...selectedTask.comments, newComment]
    };
    
    setSelectedTask(updatedTask);
    setNewComment('');
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full bg-gray-200 rounded-full">
              <div 
                className="h-4 bg-green-500 rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {progressPercentage}% complete ({completedTasks}/{tasks.length} tasks)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hours Worked</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalHoursLogged} hours</p>
            <p className="text-sm text-gray-600">out of {tasks.reduce((sum, task) => sum + task.estimatedHours, 0)} estimated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalCost.toLocaleString()}</p>
            <p className="text-sm text-gray-600">based on $100/hour rate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
          <CardDescription>Current project tasks and status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks.map((task) => (
                  <tr 
                    key={task.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedTask(task)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{task.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        task.status === 'completed' ? 'bg-green-100 text-green-800' :
                        task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {task.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {task.hoursLogged}/{task.estimatedHours}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${task.cost.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBrandKit = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Brand Assets</CardTitle>
          <CardDescription>Your project's visual identity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Logo</h3>
              <div className="border-2 border-dashed rounded-lg p-4 flex justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
              </div>
              <Button variant="outline" className="mt-2 w-full">
                Upload New Logo
              </Button>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Color Palette</h3>
              <div className="grid grid-cols-3 gap-2">
                {['#3b82f6', '#10b981', '#f59e0b'].map((color) => (
                  <div key={color} className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full mr-2 border border-gray-200" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm">{color}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Edit Colors
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
    
      {/* Top Bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden mr-2"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold text-gray-900">ProjectHub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Client Name</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - shown on desktop, toggleable on mobile */}
          {(showMobileMenu || window.innerWidth >= 768) && (
            <div className="w-full md:w-64 flex-shrink-0">
              <nav className="space-y-1">
                <Button
                  variant={activeTab === 'dashboard' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('dashboard')}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button
                  variant={activeTab === 'projects' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('projects')}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Projects
                </Button>
                <Button
                  variant={activeTab === 'brand-kit' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('brand-kit')}
                >
                  <Palette className="mr-2 h-4 w-4" />
                  Brand Kit
                </Button>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Active Project: Website Redesign</h2>
              <p className="text-gray-600">Client: Acme Corporation</p>
            </div>

            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'brand-kit' && renderBrandKit()}
            {activeTab === 'projects' && (
              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All projects will be listed here.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>{selectedTask.title}</CardTitle>
              <CardDescription>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  selectedTask.status === 'completed' ? 'bg-green-100 text-green-800' :
                  selectedTask.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {selectedTask.status.replace('-', ' ')}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p>{selectedTask.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Hours Worked</h3>
                  <p>{selectedTask.hoursLogged} / {selectedTask.estimatedHours} hours</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Cost</h3>
                  <p>${selectedTask.cost.toLocaleString()}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Comments & Feedback</h3>
                {selectedTask.comments.length > 0 ? (
                  <div className="space-y-2 mb-4">
                    {selectedTask.comments.map((comment, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded">
                        <p>{comment}</p>
                        <Button variant="ghost" size="sm" className="mt-1">
                          Convert to subtask
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No comments yet</p>
                )}

                <div className="space-y-2">
                  <Textarea 
                    placeholder="Add your feedback or comment..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setSelectedTask(null)}>
                      Close
                    </Button>
                    <Button onClick={handleAddComment}>
                      Add Comment
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}