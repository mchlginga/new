import { BrowserRouter, Routes, Route } from "react-router-dom";

// public
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Course";
import HowTo from "./pages/HowTo";
import Register from "./pages/auth/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/how-to" element={<HowTo />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
