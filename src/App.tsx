import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
// import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* Add other nested routes here */}
      </Route>
    </Routes>
  );
}

export default App;
