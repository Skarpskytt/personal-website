import { useState, useEffect } from 'react';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = 'Software Engineer';

    useEffect(() => {
        setIsLoaded(true);
        
        // Typewriter effect
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200/50 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                
                {/* Floating particles */}
                <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-emerald-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    
                    {/* Left Side - Profile Image */}
                    <div className={`flex-shrink-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative group">
                            {/* Animated spinning gradient border */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 via-emerald-500 to-blue-500 opacity-75 blur-sm animate-spin-slow"></div>
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 via-teal-500 to-emerald-500 opacity-50 blur-md animate-spin-reverse"></div>
                            
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                            
                            {/* Image container */}
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 via-teal-500 to-emerald-500 group-hover:scale-105 transition-transform duration-500">
                                {/* Your profile image */}
                                <img 
                                    src="/images/profile.jpg" 
                                    alt="John Jushua Chua"
                                    className={`w-full h-full object-cover relative z-10 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageError(true)}
                                />
                                {/* Placeholder initials - only shows when image fails to load */}
                                {imageError && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white text-5xl sm:text-6xl font-bold">JJC</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-center md:text-left flex-1">
                        {/* Badge */}
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-gray-600 text-sm font-medium">Available for new opportunities</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <span className="text-gray-900">Hi, I'm </span>
                            <span className="text-gradient-animate">
                                John Jushua Chua
                            </span>
                        </h1>

                        {/* Subtitle with typewriter effect */}
                        <p className={`text-xl sm:text-2xl text-gray-500 font-light mb-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {typedText}<span className="animate-pulse">|</span>
                        </p>

                        {/* Description */}
                        <p className={`text-gray-500 text-base sm:text-lg mb-8 leading-relaxed transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            I'm a Software Engineer passionate about building efficient, scalable, and user-focused solutions. I enjoy turning ideas into reliable applications—whether through clean backend logic, intuitive interfaces, or seamless integrations.
                        </p>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 hover:scale-105 flex items-center group"
                            >
                                View My Work
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 flex items-center group"
                            >
                                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider font-medium text-center">Tech Stack</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {['Java', 'Python', 'HTML', 'CSS', 'Tailwind', 'PHP', 'Laravel', 'React', 'Node.js', 'MySQL', 'JavaScript', 'Linux'].map((tech) => (
                            <div
                                key={tech}
                                className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all cursor-default"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
