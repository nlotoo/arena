import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './core/home-page/HomePage.js';
import { NotFoundPage } from './additionalComponents/notFoundPage/NotFoundPage.js';
import { LoginPage } from './auth/login/loginPage.js';
import { RegisterPage } from './auth/register/registerPage';
import { ArenaPage } from './game-structure/ArenaPage.js';
import { BracketComponent } from './game-structure/Bracket/BracketComponent.js';
import { BracketComponent2 } from './game-structure/bracket2/BracketComponent2.js'
import { BracketComponent3 } from './game-structure/Bracket3/BracketComponent3.js'
function App() {
  return (
    <div>

      <h1>App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/arena" element={<ArenaPage />} />
        <Route path="/bracket" element={<BracketComponent />} />
        <Route path="/bracket2" element={<BracketComponent2 />} />
        <Route path="/bracket3" element={<BracketComponent3 />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </div>
  );
}


export default App;
