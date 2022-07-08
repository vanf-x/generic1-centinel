// import Form from "./components/form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopNavigation from "./components/navigation/DesktopNavigation";
import MobileNavigation from "./components/navigation/MobileNavigation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/inicio" />
          <Route path="/nosotros" />
          <Route path="/servicios" />
          <Route path="/contacto" />
        </Routes>
        <MobileNavigation />
        <DesktopNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
