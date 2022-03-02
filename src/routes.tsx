import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutme"element={<AboutMe />}></Route>
      </Routes> 
    </BrowserRouter>
  );
}
