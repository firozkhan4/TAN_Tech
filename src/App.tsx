import React, { useEffect } from 'react';
import { Building2, Users, Rocket, Mail, ArrowRight, CheckCircle2, Globe2, Star, Sparkles } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <Building2 className="h-6 w-6 text-blue-600 group-hover:animate-float" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">TAN Teach</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-blue-600 transition-colors group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-semibold">Innovation Meets Excellence</span>
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforming Ideas Into
                  <span className="text-gradient block mt-2">Digital Reality</span>
                </h1>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                  We help businesses grow by creating innovative digital solutions that drive success and deliver exceptional results.
                </p>
                <div className="mt-8 flex gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="relative reveal">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl relative transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-semibold">What We Offer</span>
            </span>
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-4 text-gray-600">We offer comprehensive solutions to help your business thrive in the digital age.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Globe2 className="h-8 w-8 text-blue-600" />,
                title: "Web Development",
                description: "Custom websites and web applications built with the latest technologies."
              },
              {
                icon: <Rocket className="h-8 w-8 text-blue-600" />,
                title: "Digital Strategy",
                description: "Strategic planning and consulting to maximize your online presence."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "UI/UX Design",
                description: "Beautiful and intuitive interfaces that users love to interact with."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="reveal bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-3 bg-blue-50 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative reveal">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Our office"
                className="rounded-lg shadow-xl relative"
              />
            </div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Users className="h-4 w-4" />
                <span className="text-sm font-semibold">Who We Are</span>
              </span>
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                With over a decade of experience, we've helped countless businesses achieve their digital goals. Our team of experts is passionate about delivering innovative solutions that drive real results.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "10+ years of industry experience",
                  "100+ successful projects delivered",
                  "24/7 dedicated support",
                  "Award-winning team"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 transform group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto reveal">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-semibold">Our Work</span>
            </span>
            <h2 className="text-3xl font-bold">Our Projects</h2>
            <p className="mt-4 text-gray-600">Take a look at some of our recent work.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                title: "E-commerce Platform",
                category: "Web Development"
              },
              {
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
                title: "Financial Dashboard",
                category: "UI/UX Design"
              },
              {
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
                title: "Mobile App",
                category: "App Development"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="reveal bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center reveal">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-semibold">Contact Us</span>
              </span>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-gray-600">Ready to start your next project? Contact us today.</p>
            </div>
            <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
              <textarea
                placeholder="Message"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent md:col-span-2 transition-all duration-300"
                rows={4}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 md:col-span-2 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                Send Message <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 group">
              <Building2 className="h-6 w-6 group-hover:animate-float" />
              <span className="text-xl font-bold">CompanyName</span>
            </div>
            <div className="mt-6 md:mt-0">
              <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
