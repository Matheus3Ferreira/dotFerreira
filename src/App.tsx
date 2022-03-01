import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route index element={<Home />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
