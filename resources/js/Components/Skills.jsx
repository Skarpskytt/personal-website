import { useScrollAnimation, useMultipleScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Skills() {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    const [tagsRef, tagsVisible] = useScrollAnimation(0.2);
    
    const skillCategories = [
        {
            title: 'Frontend',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            skills: [
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'React', level: 75 },
                { name: 'Tailwind CSS', level: 85 },
            ],
        },
        {
            title: 'Backend',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            skills: [
                { name: 'PHP', level: 85 },
                { name: 'Laravel', level: 80 },
                { name: 'Node.js', level: 70 },
                { name: 'Python', level: 75 },
                { name: 'Java', level: 70 },
            ],
        },
        {
            title: 'Database',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 70 },
                { name: 'MongoDB', level: 60 },
            ],
        },
        {
            title: 'Tools & Others',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: [
                { name: 'Git', level: 80 },
                { name: 'Linux', level: 75 },
                { name: 'Docker', level: 60 },
                { name: 'REST API', level: 80 },
            ],
        },
    ];

    const [setCategoryRef, categoriesVisible] = useMultipleScrollAnimation(skillCategories.length, 0.1);

    return (
        <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">My Expertise</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                        Skills & Technologies
                    </h2>
                    <div className={`w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${headerVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            ref={setCategoryRef(index)}
                            className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-1 ${categoriesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-1000 ease-out"
                                                style={{ 
                                                    width: categoriesVisible[index] ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${(index * 150) + (skillIndex * 100)}ms`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <div 
                    ref={tagsRef}
                    className={`mt-12 text-center transition-all duration-700 ${tagsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Other Technologies I've Worked With</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['VS Code', 'Postman', 'Figma', 'GitHub', 'npm', 'Composer', 'XAMPP', 'Apache', 'Bootstrap', 'jQuery', 'AJAX', 'JSON'].map((tech, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default ${tagsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
