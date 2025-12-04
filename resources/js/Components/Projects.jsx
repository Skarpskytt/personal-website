import { useScrollAnimation, useMultipleScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Projects() {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    
    const projects = [
        {
            title: 'Room Reservation System',
            description: 'A web-based room booking management system that streamlines the reservation process, improving scheduling efficiency for internal operations.',
            image: '/images/projects/room-reservation.jpg',
            tags: ['Laravel', 'MySQL', 'PHP', 'Tailwind CSS'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive personal portfolio website built with React and Laravel, featuring smooth animations and clean design.',
            image: '/images/projects/portfolio.jpg',
            tags: ['React', 'Laravel', 'Tailwind CSS', 'Inertia.js'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
        },
        {
            title: 'Task Management App',
            description: 'A productivity application for managing tasks and projects with features like drag-and-drop, deadlines, and team collaboration.',
            image: '/images/projects/task-app.jpg',
            tags: ['React', 'Node.js', 'MySQL', 'REST API'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
        {
            title: 'Wastewise a Decision Support System',
            description: 'A full-stack online shopping platform with product management, cart functionality, and secure payment integration.',
            image: '/images/projects/ecommerce.jpg',
            tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
        },
    ];

    const [setProjectRef, projectsVisible] = useMultipleScrollAnimation(projects.length, 0.1);

    return (
        <section id="projects" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">My Work</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Featured Projects
                    </h2>
                    <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${headerVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each one was built to solve real problems and improve my skills.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={setProjectRef(index)}
                            className={`group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${projectsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative h-52 bg-gradient-to-br from-blue-500 via-teal-500 to-emerald-500 overflow-hidden">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                                
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Project Links - Show on Hover */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.githubUrl && project.githubUrl !== '#' && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/90 hover:bg-white rounded-full text-gray-700 hover:text-gray-900 transition-colors"
                                            title="View Code"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.liveUrl && project.liveUrl !== '#' && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/90 hover:bg-white rounded-full text-gray-700 hover:text-gray-900 transition-colors"
                                            title="View Live"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Skarpskytt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
