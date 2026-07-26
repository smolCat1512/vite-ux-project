import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CaseStudyShelterLegacy from "./pages/CaseStudies/shelter_legacy";
import CaseStudyNFCCLegacy from "./pages/CaseStudies/nfcc_legacy";
import ProjectSummary from "./pages/CaseStudies/ProjectSummary";
import CaseStudyPage from "./pages/CaseStudies/CaseStudyPage";
import CV from "./assets/cv";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectSummary />} />
      </Route>

      {/* Case study and CV outside RootLayout - so do not inherit theming, and can open
      as target_blank items so viewer does not have to go back and forwards on web site */}
      <Route
        path="/case-studies/legacy/shelter"
        element={<CaseStudyShelterLegacy />}
      />
      <Route
        path="/case-studies/legacy/nfcc"
        element={<CaseStudyNFCCLegacy />}
      />
      <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;
