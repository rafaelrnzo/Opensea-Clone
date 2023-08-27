import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/home/index'
import NoPage from './components/noPage/index'
import Collection from './components/collection';
import Drops from './components/drops';
import Profile from './components/profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/collection" index element={<Collection />} />
        <Route path="/drops" index element={<Drops />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);