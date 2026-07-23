import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Now from "./pages/Now";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
