import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import { Landing } from "./pages/Landing";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
