import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Compare from "./pages/Compare";
import About from "./pages/About";
import Data from "./pages/Data";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/data" element={<Data />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/about" element={<About />} />
                    {/* Default route */}
                    <Route path="/" element={<Data />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

