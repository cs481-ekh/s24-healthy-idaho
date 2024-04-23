import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Compare from "./pages/Compare";
import About from "./pages/About";
import Data from "./pages/Data";
import Admin from "./pages/Admin"
import AdminControl from "./pages/AdminControl"
import axios from 'axios';

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/data" element={<Data />} />
                        <Route path="/compare" element={<Compare />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/admin-control" element={<AdminControl />} />
                        {/* Default route */}
                        <Route path="/" element={<Data />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

