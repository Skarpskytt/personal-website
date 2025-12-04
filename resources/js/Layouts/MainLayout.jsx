import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
