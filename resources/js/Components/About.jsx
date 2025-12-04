import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    const [leftRef, leftVisible] = useScrollAnimation(0.2);
    const [rightRef, rightVisible] = useScrollAnimation(0.2);
    const [statsRef, statsVisible] = useScrollAnimation(0.3);

    const experiences = [
        {
            year: 'Nov 2025 - Present',
            title: 'IT Associate',
            company: 'Czark Mak Corporation',
            location: 'Makati, NCR',
            description: 'Managing IT infrastructure and providing technical support. Developing internal tools and automating workflows to improve operational efficiency. Collaborating with cross-functional teams to implement technology solutions.',
        },
        {
            year: 'Feb 2025 - May 2025',
            title: 'IT and Backend Developer, Intern',
            company: 'Department of Trade and Industry (DTI)',
            location: 'Makati, NCR (On-Site)',
            description: 'Assisted in developing and maintaining a Room Reservation Management System using Laravel and MySQL, improving booking efficiency. Diagnosed and resolved hardware, software, and network issues. Supported cybersecurity awareness by implementing password policies. Conducted User Acceptance Testing (UAT) and documented bugs to enhance system reliability.',
        },
    ];

    const education = [
        {
            year: '2021 - 2025',
            degree: 'Bachelor of Science in Information Technology Major in Network Security',
            school: 'University of Makati (UMak)',
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Get to Know Me
                    </h2>
                    <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${headerVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - About Text */}
                    <div 
                        ref={leftRef}
                        className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            A passionate developer who loves building things
                        </h3>
                        
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Hello! I'm John Jushua Chua, a Software Engineer based in the Philippines. 
                                I enjoy creating things that live on the internet, whether that be websites, 
                                applications, or anything in between.
                            </p>
                            <p>
                                My interest in web development started back in 2023 when I decided to try 
                                building custom websites — turns out hacking together HTML & CSS taught me 
                                a lot about programming and sparked my passion for development!
                            </p>
                            <p>
                                Fast-forward to today, I've had the privilege of working on various projects 
                                that have helped me grow as a developer. My main focus these days is building 
                                accessible, inclusive products and digital experiences.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div 
                            ref={statsRef}
                            className="grid grid-cols-3 gap-6 mt-10"
                        >
                            {[
                                { value: '1+', label: 'Years Experience', delay: '0' },
                                { value: '10+', label: 'Projects Done', delay: '100' },
                                { value: '5+', label: 'Happy Clients', delay: '200' },
                            ].map((stat, index) => (
                                <div 
                                    key={index}
                                    className={`text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover-lift transition-all duration-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                    style={{ transitionDelay: `${stat.delay}ms` }}
                                >
                                    <div className="text-3xl font-bold text-gradient-animate">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Experience & Education */}
                    <div 
                        ref={rightRef}
                        className={`space-y-10 transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                    >
                        {/* Experience */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Experience
                            </h4>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div 
                                        key={index} 
                                        className="relative pl-8 border-l-2 border-blue-200 hover:border-blue-400 transition-colors duration-300 group"
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="text-sm text-blue-600 font-medium">{exp.year}</span>
                                        <h5 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors duration-300">{exp.title}</h5>
                                        <p className="text-gray-500">{exp.company}</p>
                                        {exp.location && <p className="text-gray-400 text-sm">{exp.location}</p>}
                                        <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                Education
                            </h4>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div 
                                        key={index} 
                                        className="relative pl-8 border-l-2 border-teal-200 hover:border-teal-400 transition-colors duration-300 group"
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="text-sm text-teal-600 font-medium">{edu.year}</span>
                                        <h5 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-teal-600 transition-colors duration-300">{edu.degree}</h5>
                                        <p className="text-gray-500">{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105 group"
                        >
                            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
