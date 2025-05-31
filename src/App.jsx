import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Layout from "./components/Layout";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="/" element={< />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
