'use client';

import { useState } from 'react';
import { MockDashboard } from './MockDashboard';
import { MockAnalytics } from './MockAnalytics';

export function Projects() {
  const [activeProject, setActiveProject] = useState<'dashboard' | 'analytics'>('dashboard');

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Interactive Project Demos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore our AI-powered solutions in action
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveProject('dashboard')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              activeProject === 'dashboard'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Analytics Dashboard
          </button>
          <button
            onClick={() => setActiveProject('analytics')}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              activeProject === 'analytics'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Advanced Analytics
          </button>
        </div>

        {/* Project Display */}
        <div className="max-w-7xl mx-auto">
          {activeProject === 'dashboard' && <MockDashboard />}
          {activeProject === 'analytics' && <MockAnalytics />}
        </div>

        {/* Project Info */}
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-sm sm:text-base text-gray-600">
            These are interactive mockups showcasing our AI capabilities
          </p>
        </div>
      </div>
    </section>
  );
}
