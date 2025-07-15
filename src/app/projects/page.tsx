"use client";

import { majorProjects, smallTasks, categories } from './data.js';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  // Filter projects based on active filter
  const filteredMajorProjects = activeFilter === 'All Projects' 
    ? majorProjects 
    : majorProjects.filter(project => project.category === activeFilter);

  const filteredSmallTasks = activeFilter === 'All Projects'
    ? smallTasks
    : smallTasks.filter(task => task.category === activeFilter);
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
              <Image src="/callitgood.svg" alt="Call It Good Logo" width={32} height={32} className="mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Call It Good</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/#services" className="text-gray-700 hover:text-gray-900">Services</Link>
              <Link href="/#about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      </header>

      {/* Hero Section */}
      <section className="bg-[#F0F2BD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <Image src="/callitgood.svg" alt="Call It Good Logo" width={48} height={48} className="mr-3 sm:mr-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B352A]">
              Example Projects
            </h2>
          </div>
          <p className="text-xl text-[#4B352A] mb-8 max-w-3xl mx-auto">
            From the everyday to the unusual - here are some of the interesting projects we&apos;ve tackled.             No job is too big, too small, or too unique for us to handle.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-[#B2CD9C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-[#CA7842] text-white'
                    : 'bg-white text-[#4B352A] hover:bg-[#CA7842] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Major Projects Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMajorProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#B2CD9C] overflow-hidden">
                  <div className="flex">
                    {/* Project Image - Left Half */}
                    <div className="aspect-square w-1/2 bg-gradient-to-br from-[#B2CD9C] to-[#F0F2BD] flex items-center justify-center overflow-hidden group relative">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <Image 
                        src={project.hoverImage} 
                        alt={`${project.title} in action`}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    
                    {/* Project Details - Right Half */}
                    <div className="w-1/2 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-[#CA7842] bg-[#F0F2BD] px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-s font-semibold text-[#4B352A] mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-[#4B352A] text-xs mb-3 line-clamp-5">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Small Tasks Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#4B352A] mb-8 text-center">Other Projects & Tasks</h2>
            <div className="bg-white rounded-lg shadow-md border border-[#B2CD9C] p-8">
              <div className="max-h-80 overflow-y-auto">
                <div className="space-y-2">
                  {filteredSmallTasks.map((task, index) => (
                    <div key={index} className="flex items-start space-x-3 py-2">
                      <div className="bg-[#CA7842] rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                      <p className="text-[#4B352A] text-sm">{task.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#4B352A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Got a Unique Project?
          </h2>
          <p className="text-xl text-[#B2CD9C] mb-8">
            Don&apos;t see your project type listed? We love a good challenge! Call us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16122937485" className="bg-[#CA7842] text-white px-8 py-3 rounded-md text-lg hover:bg-[#B2CD9C] hover:text-[#4B352A] transition-colors">
              (612) 293-7485
            </a>
            <Link href="/#contact" className="border border-[#B2CD9C] text-[#B2CD9C] px-8 py-3 rounded-md text-lg hover:bg-[#B2CD9C] hover:text-[#4B352A] transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4B352A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Image src="/callitgood.svg" alt="Call It Good Logo" width={32} height={32} className="mr-3" />
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
        </div>        </footer>
      </div>
    </div>
  );
}
