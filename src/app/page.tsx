"use client";

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img src="/callitgood.svg" alt="Call It Good Logo" className="h-8 w-8 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">Call It Good</h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
                <a href="/projects" className="text-gray-700 hover:text-gray-900">Projects</a>
                <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
              </div>
              <div className="md:hidden">
                <button 
                  className="text-gray-700 hover:text-gray-900 focus:outline-none p-3 rounded-md touch-manipulation active:bg-gray-100"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  type="button"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <a href="tel:+16122937485" className="bg-[#4B352A] text-white px-4 py-2 rounded-md hover:bg-[#CA7842] transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="/projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="bg-[#F0F2BD] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center mb-6">
              <img src="/callitgood.svg" alt="Call It Good Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mr-3 sm:mr-4" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4B352A]">
                Finally, Help with the Little Things
              </h2>
            </div>
            <p className="text-xl text-[#4B352A] mb-8 max-w-3xl mx-auto">
              We know how frustrating it can be to find someone for those everyday repairs - replacing a window, 
              fixing a sink, or tackling routine maintenance. Our focus is simple: get your projects done right, 
              at a fair price, without unnecessary complications. Your home may be complex, but getting help shouldn't be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#4B352A] text-white px-8 py-3 rounded-md text-lg hover:bg-[#CA7842] transition-colors">
                Get Free Quote
              </a>
              <a href="tel:+16122937485" className="border border-[#4B352A] text-[#4B352A] px-8 py-3 rounded-md text-lg hover:bg-[#B2CD9C] transition-colors">
                (612) 293-7485
              </a>
              <a href="/projects" className="border border-[#CA7842] text-[#CA7842] px-8 py-3 rounded-md text-lg hover:bg-[#CA7842] hover:text-white transition-colors">
                Previous Projects
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4B352A] mb-4">Our Services</h2>
              <p className="text-xl text-[#4B352A]">A helping hand for the jobs that fall between “too small” and “too annoying”</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C]">
                <h3 className="text-xl font-semibold text-[#4B352A] mb-3">Interior Repairs</h3>
                <p className="text-[#4B352A] mb-4">Drywall repair, caulking, and basic interior maintenance</p>
                <ul className="text-sm text-[#4B352A] space-y-1">
                  <li>• Drywall repair and patching</li>
                  <li>• Caulking and sealing</li>
                  <li>• Basic fixture replacements</li>
                  <li>• Minor repairs and touch-ups</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C]">
                <h3 className="text-xl font-semibold text-[#4B352A] mb-3">Honey-Do List</h3>
                <p className="text-[#4B352A] mb-4">Furniture assembly, TV mounting, shelving, and those everyday tasks</p>
                <ul className="text-sm text-[#4B352A] space-y-1">
                  <li>• Furniture assembly</li>
                  <li>• TV wall mounting</li>
                  <li>• Shelves and storage</li>
                  <li>• Hang art and decor</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C]">
                <h3 className="text-xl font-semibold text-[#4B352A] mb-3">Exterior Work</h3>
                <p className="text-[#4B352A] mb-4">Storm doors, weatherstripping, and outdoor maintenance</p>
                <ul className="text-sm text-[#4B352A] space-y-1">
                  <li>• Storm door installation</li>
                  <li>• Weatherstripping</li>
                  <li>• Minor deck repairs</li>
                  <li>• Fence and gate repair</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C]">
                <h3 className="text-xl font-semibold text-[#4B352A] mb-3">Bathroom & Kitchen</h3>
                <p className="text-[#4B352A] mb-4">Small updates, fixture upgrades, and functional improvements</p>
                <ul className="text-sm text-[#4B352A] space-y-1">
                  <li>• Minor bathroom updates</li>
                  <li>• Kitchen hardware installation</li>
                  <li>• Cabinet adjustments</li>
                  <li>• Towel racks and hooks</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C]">
                <h3 className="text-xl font-semibold text-[#4B352A] mb-3">Plumbing Repairs</h3>
                <p className="text-[#4B352A] mb-4">Basic plumbing repairs and installations for everyday issues</p>
                <ul className="text-sm text-[#4B352A] space-y-1">
                  <li>• Faucet replacement and repair</li>
                  <li>• Leak investigation and fixes</li>
                  <li>• Toilet repairs</li>
                  <li>• Drain cleaning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C]">
                <h3 className="text-xl font-semibold text-[#4B352A] mb-3">General Labor</h3>
                <p className="text-[#4B352A] mb-4">Heavy lifting, yard work, and those tasks that need an extra hand</p>
                <ul className="text-sm text-[#4B352A] space-y-1">
                  <li>• Mulch spreading and yard cleanup</li>
                  <li>• Hauling items from basement/garage</li>
                  <li>• Dump runs and debris removal</li>
                  <li>• Digging and basic landscaping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-[#B2CD9C] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center items-center mb-6">
                <img src="/callitgood.svg" alt="Call It Good Logo" className="h-10 w-10 mr-3" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#4B352A]">Call It Good</h2>
              </div>
              
              {/* Personal Bio Section */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#CA7842] mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/ben.jpg" 
                      alt="Ben - Call It Good Owner" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#CA7842]"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-[#4B352A] mb-3">Meet Ben</h3>
                    <p className="text-[#4B352A] text-lg leading-relaxed">
                    I live in Minneapolis and know my way around our classic 1920s homes. I’ve been doing DIY projects and helping out friends, family, and neighbors for as long as I can remember. Growing up, I was surrounded by handy people who always had a project going. I've pretty much always been the friend with a truck and the tools who didn’t mind helping out.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-[#4B352A] mb-8">
                We're dedicated to providing reliable, affordable handyman services that you can trust. 
                Our commitment is simple: quality work, fair pricing, and excellent communication.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#CA7842] mb-8">
                <div className="flex flex-wrap justify-center gap-8 text-sm text-[#4B352A]">
                  <div className="flex items-center">
                    <span className="text-[#CA7842] mr-2">✓</span>
                    <span>Licensed LLC</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#CA7842] mr-2">✓</span>
                    <span>State Registered</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#CA7842] mr-2">✓</span>
                    <span>Fully Insured</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-[#CA7842] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">20+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4B352A] mb-2">Years DIY Experience</h3>
                  <p className="text-[#4B352A]">Decades of hands-on home improvement knowledge</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#CA7842] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4B352A] mb-2">Satisfaction Focus</h3>
                  <p className="text-[#4B352A]">Committed to getting every job done right</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#CA7842] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">24h</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4B352A] mb-2">Quick Response</h3>
                  <p className="text-[#4B352A]">Fast quotes and reliable scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4B352A] mb-4">Get In Touch</h2>
              <p className="text-xl text-[#4B352A]">Ready to tackle your next project? Let's talk!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-[#4B352A] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-[#CA7842] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-sm"> </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#4B352A]">Phone</p>
                      <p className="text-[#4B352A]">(612) 293-7485</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#CA7842] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-sm"> </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#4B352A]">Email</p>
                      <p className="text-[#4B352A]">info@call-it-good.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#CA7842] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <span className="text-sm">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#4B352A]">Service Area</p>
                      <p className="text-[#4B352A]">Minneapolis/St Paul Metro</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-[#4B352A] mb-6">Request a Quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4B352A] mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-[#B2CD9C] rounded-md focus:ring-[#CA7842] focus:border-[#CA7842]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4B352A] mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-[#B2CD9C] rounded-md focus:ring-[#CA7842] focus:border-[#CA7842]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#4B352A] mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-[#B2CD9C] rounded-md focus:ring-[#CA7842] focus:border-[#CA7842]" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#4B352A] mb-1">Project Description</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-[#B2CD9C] rounded-md focus:ring-[#CA7842] focus:border-[#CA7842]"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#4B352A] text-white py-2 px-4 rounded-md hover:bg-[#CA7842] transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#4B352A] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <img src="/callitgood.svg" alt="Call It Good Logo" className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Call It Good</h3>
            </div>
            <p className="text-[#B2CD9C] mb-6">Professional handyman services you can trust</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="tel:+16122937485" className="text-[#B2CD9C] hover:text-white">(612) 293-7485</a>
              <a href="mailto:info@call-it-good.com" className="text-[#B2CD9C] hover:text-white">info@call-it-good.com</a>
            </div>
            <p className="text-[#B2CD9C] text-sm">
              © 2025 Call It Good. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
