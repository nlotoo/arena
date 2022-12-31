import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './core/home-page/HomePage.js';
import { NotFoundPage } from './additionalComponents/notFoundPage/NotFoundPage.js';
import { LoginPage } from './auth/login/loginPage.js';
import { RegisterPage } from './auth/register/registerPage';

import { BracketComponent3 } from './game-structure/Bracket3/BracketComponent3.js'



function App() {
  return (
    <div>
      {/* трябва да се импортнат предз css-a */}
    
      <header className="hero">
        <div className="hero-wrap">
          <p className="intro" id="intro">BATE</p>
          <h1 id="headline">Tournamenta</h1>
          <p className="year"><i className="fa fa-star"></i> 2022 <i className="fa fa-star"></i></p>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bracket3" element={<BracketComponent3 />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </div>
  );
}


export default App;
