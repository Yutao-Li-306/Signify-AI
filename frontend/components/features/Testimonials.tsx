'use client';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow Inc.',
    content: 'Signify AI transformed our customer service operations. Their AI solution reduced response times by 80% and increased customer satisfaction significantly.',
    avatar: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'DataSphere',
    content: 'The analytics dashboard they built for us provides insights we never had before. It\'s been a game-changer for our decision-making process.',
    avatar: 'MR',
  },
  {
    name: 'Emily Johnson',
    role: 'Product Manager',
    company: 'InnovateLabs',
    content: 'Working with Signify AI was seamless. They understood our needs and delivered a solution that exceeded our expectations. Highly recommended!',
    avatar: 'EJ',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold mr-3 sm:mr-4 text-sm sm:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
