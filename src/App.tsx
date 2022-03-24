import { SideBar } from "./components/SideBar";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";
import { Logo } from "./components/Logo";

function App() {
  return (
    <BrowserRouter>
      <div className="page-layout">
        <SideBar />
        <main>
        <Logo/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutme"element={<AboutMe />}></Route>
        </Routes> 
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
