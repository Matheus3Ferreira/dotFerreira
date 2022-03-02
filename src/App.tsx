import { SideBar } from "./components/SideBar";
import "./styles/global.scss";
import {RoutesComponent} from "./routes"

function App() {
  return (
   <div className="page-layout">
     <SideBar />
     <RoutesComponent/>
   </div>
  );
}

export default App;
