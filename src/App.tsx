import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import BusinessVerticalPage from '@/pages/BusinessVerticalPage';
import LongFormPage from '@/components/LongFormPage';
import ContactPage from '@/pages/ContactPage';
import ProjectsPage from '@/pages/ProjectsPage';
import MediaPage from '@/pages/MediaPage';
import CareersPage from '@/pages/CareersPage';
import {
  aboutPage, whoWeArePage, philosophyPage, leadershipPage,
  sustainabilityPage, governancePage, investorsPage,
} from '@/data/pages';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LongFormPage data={aboutPage} />} />
        <Route path="/about/who-we-are" element={<LongFormPage data={whoWeArePage} />} />
        <Route path="/about/philosophy" element={<LongFormPage data={philosophyPage} />} />
        <Route path="/about/leadership" element={<LongFormPage data={leadershipPage} />} />
        <Route path="/businesses/:slug" element={<BusinessVerticalPage />} />
        <Route path="/sustainability" element={<LongFormPage data={sustainabilityPage} />} />
        <Route path="/governance" element={<LongFormPage data={governancePage} />} />
        <Route path="/investors" element={<LongFormPage data={investorsPage} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
