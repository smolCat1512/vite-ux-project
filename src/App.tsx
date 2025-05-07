import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CaseStudyShelter from "./pages/CaseStudies/Shelter";
import CaseStudyNFCC from "./pages/CaseStudies/NFCC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/case-studies/shelter" element={<CaseStudyShelter />} />
        <Route path="/case-studies/nfcc" element={<CaseStudyNFCC />} />
      </Route>
    </Routes>
  );
}

export default App;
