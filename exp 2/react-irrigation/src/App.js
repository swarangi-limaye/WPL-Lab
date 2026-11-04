
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import FarmerRegistration from "./pages/farmer-registration";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/farmer-registration"
                    element={<FarmerRegistration />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
