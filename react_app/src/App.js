import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './core/home-page/HomePage.js';
import { NotFoundPage } from './additionalComponents/notFoundPage/NotFoundPage.js';
import { LoginPage } from './auth/login/loginPage.js';
import { RegisterPage } from './auth/register/registerPage';
import { ArenaPage } from './game-structure/ArenaPage.js';
import { Component } from './game-structure/bracket';

function App() {
  return (
    <div>

      <h1>App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/arena" element={<ArenaPage />} />
        <Route path="/component" element={<Component />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}


export default App;
