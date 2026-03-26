import { Mail, MessageSquare, Video, Calendar, Users, HardDrive, Sparkles, CheckSquare, FileText, Sheet, Sticky } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'mail',
    name: 'Mail',
    description: 'Secure email with powerful search and organization',
    icon: <Mail className="w-8 h-8" />,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 'chat',
    name: 'Chat',
    description: 'Team messaging with channels and direct messages',
    icon: <MessageSquare className="w-8 h-8" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'meetings',
    name: 'Meetings',
    description: 'Video conferencing with screen sharing and recording',
    icon: <Video className="w-8 h-8" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    description: 'Scheduling with automatic conflict detection',
    icon: <Calendar className="w-8 h-8" />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'people',
    name: 'People',
    description: 'Team directory with profiles and org charts',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 'drive',
    name: 'Drive',
    description: 'Cloud storage with real-time collaboration',
    icon: <HardDrive className="w-8 h-8" />,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'ai',
    name: 'AI Assistant',
    description: 'Smart writing and productivity assistant',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 'tasks',
    name: 'Tasks',
    description: 'Project management with kanban boards',
    icon: <CheckSquare className="w-8 h-8" />,
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    id: 'docs',
    name: 'Docs',
    description: 'Document creation with real-time editing',
    icon: <FileText className="w-8 h-8" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'sheets',
    name: 'Sheets',
    description: 'Spreadsheets with formulas and charts',
    icon: <Sheet className="w-8 h-8" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'notes',
    name: 'Notes',
    description: 'Quick notes with rich formatting',
    icon: <Sticky className="w-8 h-8" />,
    color: 'bg-orange-100 text-orange-600',
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything your team needs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All the tools you need in one unified platform. No switching between apps.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-lg ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Hover action */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            onClick={() => window.location.href = 'https://app.haala.io/signup'}
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}
