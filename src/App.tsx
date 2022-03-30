import { SideBar } from "./components/SideBar";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";
import { Logo } from "./components/Logo";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="page-layout">
        <SideBar />
        <main>
        <Logo/>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/aboutme"element={<AboutMe />}></Route>
          <Route path="/projects"element={<Projects />}></Route>
          <Route path="/contactme"element={<ContactMe />}></Route>
          <Route path="/feedback"element={<Feedback />}></Route>
        </Routes> 
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
