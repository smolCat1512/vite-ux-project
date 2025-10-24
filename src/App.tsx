import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CaseStudyShelter from "./pages/CaseStudies/shelter_detailed";
import CaseStudyNFCC from "./pages/CaseStudies/nfcc_detailed";

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
