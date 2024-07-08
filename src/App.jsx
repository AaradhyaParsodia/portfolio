import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Landing, About, Projects, ContactMe } from "./pages/";

import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {

    return (
        <BrowserRouter>
            <div className="main-container">
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Landing />}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<ContactMe />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
