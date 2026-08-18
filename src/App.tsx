import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/nex/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ProjectsPage from "@/pages/ProjectsPage";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
