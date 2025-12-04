import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Projects from '@/Components/Projects';
import Skills from '@/Components/Skills';
import Contact from '@/Components/Contact';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </MainLayout>
    );
}
