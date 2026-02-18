import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col">
            <Navbar />
            <main className="flex-1 main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
