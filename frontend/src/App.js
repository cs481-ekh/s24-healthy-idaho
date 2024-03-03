import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Compare from "./pages/Compare";
import About from "./pages/About";
import Data from "./pages/Data";
import Admin from "./pages/Admin"
import axios from 'axios';

const App = () => {

    // useEffect(() => {
    //     axios.get('http://localhost:8001/healthy_idaho/')
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/data" element={<Data />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                    {/* Default route */}
                    <Route path="/" element={<Data />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

