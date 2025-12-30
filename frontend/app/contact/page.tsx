'use client';

import { Navbar } from '@/components/layout/Navbar';

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 md:py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:contact@mail.signifyai.cloud"
                    className="text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    contact@mail.signifyai.cloud
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
