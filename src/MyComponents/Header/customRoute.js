import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomMenu from './index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CustomMenu />} />
                <Route path="/frame" element={<div>Frame Page</div>} />
                <Route path="/topmat" element={<div>Top Mat Page</div>} />
                <Route path="/bottommat" element={<div>Bottom Mat Page</div>} />
                <Route path="/liner" element={<div>Liner Page</div>} />
                <Route path="/artwork" element={<div>Artwork Page</div>} />
                <Route path="/summary" element={<div>Summary Page</div>} />
            </Routes>
        </Router>
    );
};