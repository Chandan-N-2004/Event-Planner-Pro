import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* THIS removes dim effect */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
