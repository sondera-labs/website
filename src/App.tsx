import { BrowserRouter, Route, Routes } from "react-router";
import LandingScreen from "./screens/LandingScreen";
import DemoScreen from "./screens/DemoScreen";

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        {import.meta.env.DEV && <Route path="/demo" element={<DemoScreen />} />}
        <Route path="*" element={<LandingScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
