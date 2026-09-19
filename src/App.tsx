import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CaseStudyShelterLegacy from "./pages/CaseStudies/shelter_legacy";
import CaseStudyNFCCLegacy from "./pages/CaseStudies/nfcc_legacy";
import ProjectSummary from "./pages/CaseStudies/ProjectSummary";
import CaseStudyPage from "./pages/CaseStudies/CaseStudyPage";
import CV from "./assets/cv";
import PresalesCV from "./assets/presales-cv";
import PasswordGate from "./components/PasswordGate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectSummary />} />
      </Route>

      <Route
        path="/case-studies/legacy/shelter"
        element={
          <PasswordGate>
            <CaseStudyShelterLegacy />
          </PasswordGate>
        }
      />
      <Route
        path="/case-studies/legacy/nfcc"
        element={
          <PasswordGate>
            <CaseStudyNFCCLegacy />
          </PasswordGate>
        }
      />
      <Route
        path="/case-studies/:slug"
        element={
          <PasswordGate>
            <CaseStudyPage />
          </PasswordGate>
        }
      />
      <Route
        path="/cv"
        element={
          <PasswordGate>
            <CV />
          </PasswordGate>
        }
      />
      <Route
        path="/presales-cv"
        element={
          <PasswordGate>
            <PresalesCV />
          </PasswordGate>
        }
      />
    </Routes>
  );
}

export default App;