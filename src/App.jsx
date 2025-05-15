import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GamesPage } from './components/games/GamesPage';
import { CompaniesPage } from './components/companies/companies';
import Layout from './components/layout/Layout';
import GameDetail from './components/games/GameDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout يحتوي Navbar والـ Footer */}
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index path='' element={<GamesPage />} />
          <Route path='games' element={<GamesPage />} />
          <Route path="games/:id" element={<GameDetail />} />
          <Route path='companies' element={<CompaniesPage />} />
          {/* ممكن تضيف مسارات أخرى */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
