'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-12 sm:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Signify AI Agency
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 px-2">
          Transforming businesses with cutting-edge AI solutions
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          We build intelligent systems that drive growth, automate processes, and unlock new possibilities for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base text-center">
            Get Started
          </Link>
          <a href="#projects" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base text-center">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
