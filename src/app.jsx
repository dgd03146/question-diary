import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import AuthProvider from './store/authProvider';
import Diary from './pages/diary';
import Edit from './pages/edit';
import Home from './pages/home';
import New from './pages/new';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/diary" element={<Diary />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
