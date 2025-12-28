'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/features/Hero';
import { Testimonials } from '@/components/features/Testimonials';
import { Projects } from '@/components/features/Projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can drive growth and innovation for your organization.
          </p>
          <div className="flex justify-center items-center">
            <a href="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base text-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
