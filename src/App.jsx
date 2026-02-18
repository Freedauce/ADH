import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import ProcurementHub from './pages/ProcurementHub';
import CarbonDashboard from './pages/CarbonDashboard';
import FranchisePlatform from './pages/FranchisePlatform';
import AcademyPage from './pages/AcademyPage';
import InvestorDashboard from './pages/InvestorDashboard';
import NewsPage from './pages/NewsPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/procurement" element={<ProcurementHub />} />
                    <Route path="/carbon" element={<CarbonDashboard />} />
                    <Route path="/franchise" element={<FranchisePlatform />} />
                    <Route path="/academy" element={<AcademyPage />} />
                    <Route path="/investor" element={<InvestorDashboard />} />
                    <Route path="/news" element={<NewsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
